const doc_form = document.getElementById('form');
const doc_input = document.getElementById('input');
const doc_response = document.getElementById('response');
const doc_select1 = document.getElementById('select-1');
const doc_select2 = document.getElementById('select-2');
const doc_clearbtn = document.getElementById('clear');

const clearInput = (e) => {
    e.preventDefault();
    doc_input.value = '';
};

const fetchTranslation = async (input_object) => {
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input_object)
    });
    const translated = await response.json();
    return translated;
};

const handleSubmit = async (e) => {
    e.preventDefault();
    if (doc_input.value === '') return false;
    if (doc_response.classList.contains('hidden')) doc_response.classList.remove('hidden');
    doc_response.value = '...RESPONSE LOADING...'
    const input_data = {
        text: doc_input.value,
        src: doc_select1.value,
        dest: doc_select2.value
    };
    const translated = await fetchTranslation(input_data);
    doc_response.value = translated.text;
}

const appendOptionsToSelect = (select_element, languages, codes) => {
    Object.values(languages).map((language, index) => {
        select_element.options[index] = new Option(language, codes[index]);
    });
};

const selectDefaults = () => {
    doc_select1.value = 'en';
    doc_select2.value = 'es';
};

const fetchSupportedLanguages = async () => {
    const response = await fetch('/api/');
    const data = await response.json();
    return data;
};

const renderDropboxes = async () => {
    const languages_object = await fetchSupportedLanguages();
    const languages = Object.values(languages_object);
    const lang_codes = Object.keys(languages_object);
    appendOptionsToSelect(doc_select1, languages, lang_codes);
    appendOptionsToSelect(doc_select2, languages, lang_codes);
};

renderDropboxes().then(() => selectDefaults());
doc_form.addEventListener('submit', handleSubmit);
doc_clearbtn.addEventListener('click', clearInput);