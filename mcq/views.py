from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .serializers import QuestionSerializer, QuizSerializer
from .models import  Question, Quiz

# Create your views here.

@api_view(['GET'])
def showquestion(request):
    ques = Question.objects.all()
    serializer = QuestionSerializer(ques, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def showonequestion(request,pk):
    ques = Question.objects.get(id=pk)
    serializer = QuestionSerializer(ques, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addquestion(request):
    serializer = QuestionSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


@api_view(['GET'])
def showquiz(request):
    quiz = Quiz.objects.all()
    serializer = QuizSerializer(quiz, many=True)
    return Response(serializer.data)