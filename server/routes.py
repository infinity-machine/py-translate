from rest_framework.views import APIView
from rest_framework.response import Response
from server.translate import *

class API(APIView):
    def post(self, request):
        input_string = request.data
        translated_json = english_to_spanish(input_string)
        print(translated_json)
        return Response(translated_json)