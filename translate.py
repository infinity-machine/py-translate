from googletrans import Translator
translator = Translator()
translated = translator.translate(text='I am going to the library today', src='en', dest='es')
print(translated.text)