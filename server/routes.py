from rest_framework.views import APIView
from rest_framework.response import Response
from server.translate import *

class API(APIView):
    def post(self, request):
        text, src, dest = request.data.values()
        # print(detectLanguage(input_string))
        translated_json = translateString(text, src, dest)
        print(translated_json)
        return Response(translated_json)
    
    def get(self, request):
        supported_languages = returnSupportedLanguages()
        return Response(supported_languages)