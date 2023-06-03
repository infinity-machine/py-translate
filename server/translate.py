from googletrans import Translator
import googletrans
translator = Translator()

def detectLanguage(string):
    detect_language = translator.detect(string);
    return detect_language

def handleTranslate(string_to_translate, input_lang, output_lang):
    translated = translator.translate(text=string_to_translate, src=input_lang, dest=output_lang)
    print(googletrans.LANGUAGES)
    return {
        "text": translated.text
    }