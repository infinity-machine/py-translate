from rest_framework.views import APIView
from rest_framework.response import Response
from server.translate import *

class API(APIView):
    def post(self, request):
        input_string = request.data
        print(request.data)
        print(detectLanguage(input_string))
        translated_json = handleTranslate(input_string, 'en', 'es')
        print(translated_json)
        return Response(translated_json)