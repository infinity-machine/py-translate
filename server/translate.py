from googletrans import Translator
translator = Translator()

def english_to_spanish(string):
    translated = translator.translate(text=string, src='en', dest='es')
    return {
        "text": translated.text
    }