from django.db import models

# Create your models here.



class Question(models.Model):
    questionname = models.CharField(max_length=100)
    sol = models.CharField(max_length=50)
    wrongans1 = models.CharField(max_length=50)
    wrongans2 = models.CharField(max_length=50)
    wrongans3 = models.CharField(max_length=50)
    
    def __str__(self):
        return self.questionname
    

class Quiz(models.Model):
    quizname = models.CharField(max_length=100)
    questionList = models.ManyToManyField(Question)

    def __str__(self):
        return self.quizname