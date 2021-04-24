from django.urls import path, include
from rest_framework import routers
from . import views

urlpatterns = [
    path('question/',views.showquestion,name="showquestion"),
    path('question/<str:pk>',views.showonequestion,name="showone"),
    path('addquestion/',views.addquestion,name="addquestion"),
    path('quiz/',views.showquiz,name="showquiz"),
]