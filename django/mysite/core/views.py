from django.shortcuts import render, redirect
from django.views.generic import TemplateView, ListView, CreateView
from django.core.files.storage import FileSystemStorage
from django.urls import reverse_lazy
import sys
from subprocess import run,PIPE


class Home(TemplateView):
    template_name = 'home.html'


