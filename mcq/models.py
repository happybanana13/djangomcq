from django.db import models

# Create your models here.



class Question(models.Model):
    questionname = models.CharField(max_length=100)
    sol = models.CharField(max_length=50)
    wrongans1 = models.CharField(max_length=50)
    wrongans2 = models.CharField(max_length=50)
    wrongans3 = models.CharField(max_length=50)
    

class Quiz(models.Model):
    quizname = models.CharField(max_length=100)
    question = models.ManyToManyField(Question)

