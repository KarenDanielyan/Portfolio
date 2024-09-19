from django.urls import path
from . import views

urlpatterns = [
    path('projects/', views.projects, name='projects'),
    path('contacts/', views.contacts, name='contacts'),
    path('skills/', views.skills, name='skills'),
    path('bullets/', views.bullets, name='bullets'),
    path('experience/', views.experience, name='experience')
]