const doc_form = document.getElementById('form');
const doc_input = document.getElementById('input');
const doc_response = document.getElementById('response');
const doc_select1 = document.getElementById('select-1');
const doc_select2 = document.getElementById('select-2');

const appendOptionsToSelect = (select_element, languages, codes) => {
    Object.values(languages).map((language, index) => {
        select_element.options[index] = new Option(language, codes[index]);
    });
}

const fetchSupportedLanguages = async () => {
    const response = await fetch('/api/');
    const data = await response.json();
    return data;
}

const renderDropboxes = async () => {
    const languages_object = await fetchSupportedLanguages();
    const languages = Object.values(languages_object);
    const lang_codes = Object.keys(languages_object);
    appendOptionsToSelect(doc_select1, languages, lang_codes)
    appendOptionsToSelect(doc_select2, languages, lang_codes)
};

const translateAPI = async (string, input_lang, target_lang) => {
    const input_object = {
        text: string,
        src: input_lang,
        dest: target_lang
    }
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input_object)
    });
    const translated = await response.json();
    return translated
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const translated = await translateAPI(
        doc_input.value, doc_select1.value, doc_select2.value
    );
    doc_response.innerText = translated.text;
    doc_input.value = '';
}

const onPageLoad = async () => {
    const data = await renderDropboxes();
    // console.log(data);
}

onPageLoad();
doc_form.addEventListener('submit', handleSubmit);