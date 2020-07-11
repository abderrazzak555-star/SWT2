from django.shortcuts import render
from django.views import generic
from django.http import HttpResponse

from .crawler import getCrawlerStatus, startCrawler, stopCrawler

# Create your views here.
def index(request):
    context = {
        'crawlerStatus': getCrawlerStatus(),
    }
    return render(request, 'Crawler/index.html', context)


def crawlerStatus(request):
    return HttpResponse(getCrawlerStatus())

def startCrawlerRequest(request):
    startCrawler()
    return HttpResponse("Crawler started")

def stopCrawlerRequest(request):
    stopCrawler()
    return HttpResponse("Crawler is stopping")
