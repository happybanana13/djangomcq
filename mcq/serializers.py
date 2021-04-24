from rest_framework import serializers
from .models import Question, Quiz

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class QuestionNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['questionname']

class QuizSerializer(serializers.ModelSerializer):
    questionnamelist = QuestionNameSerializer(many=True, read_only=True, source='question')        
    class Meta:
        model = Quiz
        fields = ['quizname','questionnamelist']        
