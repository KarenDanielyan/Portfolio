from debugpy.common.timestamp import current
from django.db import models
from django.contrib import admin
from base64 import b64encode

# Create your models here.
def get_base64(path):
    data = open(path, 'rb').read()
    return "data:image/jpeg;base64,%s" % b64encode(data).decode("utf-8")

class   Project(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField()
    description = models.CharField(max_length=250)
    source = models.URLField(default='')
    image = models.ImageField(upload_to='api/bucket/project')

    def __str__(self):
        return self.title

    def __json__(self):
        return {
            'title': f'{self.title}',
            'date': f'{self.date}',
            'description': f'{self.description}',
            'source': f'{self.source}',
            'image': f'{get_base64(f"{self.image}")}'
        }

class   Contacts(models.Model):
    date = models.DateField(default=current())
    email = models.EmailField()
    github = models.URLField()
    linkedin = models.URLField()

    def __str__(self):
        return

admin.site.register(Project)