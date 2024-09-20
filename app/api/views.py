from django.http import JsonResponse

from .models import Project
from .models import Contact
from .models import Skill
from .models import Bullet
from .models import Experience
from .models import Bio

# Create your views here.
def projects(request):
    if request.method == 'GET':
        plist = list(map(lambda p: p.__json__(), Project.objects.all()))
        return JsonResponse(plist, safe=False)

def contacts(request):
    if request.method == 'GET':
        return JsonResponse(Contact.objects.first().__json__(), safe=False)

def skills(request):
    if request.method == 'GET':
        slist = list(map(lambda s: s.__json__(), Skill.objects.all()))
        return JsonResponse(slist, safe=False)

def bullets(request):
    if request.method == 'GET':
        blist = list(
            map(lambda b: b.__json__(),
                Bullet.objects.all().order_by('timestamp')[:3]
        ))
        return JsonResponse(blist, safe=False)

def experience(request):
    if request.method == 'GET':
        elist = list(map(lambda e: e.__json__(), Experience.objects.all()))
        return JsonResponse(elist, safe=False)

def bio(request):
    if request.method == 'GET':
        entry = Bio.objects.first()
        if entry is None:
            return JsonResponse({'text': '', 'image': ''})
        return JsonResponse(Bio.objects.first().__json__())