from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .serializers import QuestionSerializer, QuizSerializer

from .models import  Question, Quiz

# Create your views here.


@api_view(['GET','POST'])
def upload(request):
    api_urls = {
        'hi':'bye'
    }
    return Response(api_urls)


@api_view(['GET','POST'])
def show(request):
   quiz = Quiz.objects.all()
   serializer = QuizSerializer(quiz,many=True)
   return Response(serializer.data)


def frontend(request):
    return render(request,'index.html')   