const doc_form = document.getElementById('form');
const doc_input = doc_form.children[0];
const doc_response = document.getElementById('response');

const translateAPI = async (string) => {
    const response = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(string)
    });
    return response;
}

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await translateAPI(doc_input.value);
    const translated = await response.json();
    doc_response.innerText = translated.text;
    doc_input.value = '';
}

doc_form.addEventListener('submit', handleSubmit);