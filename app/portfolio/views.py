from django.shortcuts import render

from .models import Profile

# Create your views here.
def home(request):
    profiles = Profile.objects.all()
    context = {
        'profiles': profiles
    }
    return (render(request, 'portfolio/index.html', context))
