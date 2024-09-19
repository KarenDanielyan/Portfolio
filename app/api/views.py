from django.core import serializers
from django.http import JsonResponse

from .models import Project

# Create your views here.
def projects(request):
    if request.method == 'GET':
        plist = list(map(lambda p: p.__json__(), Project.objects.all()))
        return JsonResponse(plist, safe=False)

def contacts(request):
    return JsonResponse({'contacts': 'contacts'})