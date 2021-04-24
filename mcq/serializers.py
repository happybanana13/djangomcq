from rest_framework import serializers
from .models import Question, Quiz

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'


class QuizSerializer(serializers.ModelSerializer):
    questionlist = QuestionSerializer(many=True, read_only=True, source='question')        
    class Meta:
        model = Quiz
        fields = ['quizname','questionlist']        
