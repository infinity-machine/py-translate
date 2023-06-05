from googletrans import Translator
import googletrans
translator = Translator()

def returnSupportedLanguages():
    languages = googletrans.LANGUAGES
    return languages

def detectLanguage(string):
    detect_language = translator.detect(string)
    return detect_language

def translateString(string_to_translate, input_lang, output_lang):
    translated = translator.translate(text=string_to_translate, src=input_lang, dest=output_lang)
    return {
        "text": translated.text
    }