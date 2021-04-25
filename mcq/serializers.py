from rest_framework import serializers
from .models import Question, Quiz

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['questionname','sol','wrongans1','wrongans2','wrongans3']

class QuizSerializer(serializers.ModelSerializer):        
    class Meta:
        model = Quiz
        fields = '__all__'
     

class QuizAndQuestionSerializer(serializers.Serializer):
    questionList=QuestionSerializer(many=True)
    quizname=serializers.CharField(max_length=100)