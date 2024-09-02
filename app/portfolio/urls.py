from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('skills/', views.home, name='skills'),
    path('projects/', views.home, name='projects'),
    path('about/', views.home, name='about'),
]