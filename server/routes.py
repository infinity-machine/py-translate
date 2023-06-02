from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import render

class API(APIView):
    def post(self, request):
        # input = request.data

        return Response(200)