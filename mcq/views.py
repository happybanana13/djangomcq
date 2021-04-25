from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .serializers import QuestionSerializer, QuizSerializer,QuizAndQuestionSerializer
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
    serializer = QuizAndQuestionSerializer(data=request.data)
    if serializer.is_valid():
        questions=QuestionSerializer(data=request.data['questionList'],many=True)
        if questions.is_valid():
            questions.save()
        quiz=Quiz.objects.create(quizname=request.data['quizname'])
        quiz.save()
        return Response(questions.data,status=200)
    return Response(status=400)



@api_view(['GET'])
def showquiz(request):
    quiz = Quiz.objects.all()
    serializer = QuizSerializer(quiz, many=True)
    return Response(serializer.data)
