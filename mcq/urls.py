from django.urls import path

from . import views

urlpatterns = [
    path('',views.upload, name='upload'),
    path('show/',views.show,name="show"),
    path('frontend/',views.frontend, name='frontend')
]