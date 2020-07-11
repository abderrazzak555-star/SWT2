from django.urls import path

from . import views

app_name = 'Crawler'
urlpatterns = [
    path('', views.index, name='index'),
    path('crawlerStatus/', views.crawlerStatus, name='crawlerStatus'),
    path('startCrawler/', views.startCrawlerRequest, name='startCrawler'),
    path('stopCrawler/', views.stopCrawlerRequest, name='stopCrawler'),
]