from django.urls import path

from . import views

app_name = 'mainSite'
urlpatterns = [
    path('', views.index, name='index'),
]