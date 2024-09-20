from django.db import models
from django.contrib import admin
from base64 import b64encode
from os import path as os_path

# Create your models here.
def get_base64(path):
    _, extension = os_path.splitext(path)
    data = open(path, 'rb').read()
    raw = b64encode(data).decode("utf-8")
    if extension == '.svg':
        return f"data:image/svg+xml;base64,{raw}"
    else:
        return f"data:image/{extension[1::]};base64,{raw}"

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
            'title': self.title,
            'date': str(self.date),
            'description': self.description,
            'source': self.source,
            'image': get_base64(self.image.path)
        }

class   Contact(models.Model):
    timestamp = models.DateTimeField(auto_now=True)
    email = models.EmailField()
    github = models.URLField()
    linkedin = models.URLField()

    def __str__(self):
        return str(self.timestamp)

    def __json__(self):
        return {
            'email': self.email,
            'github': self.github,
            'linkedin': self.linkedin
        }

class   Skill(models.Model):
    name = models.CharField(max_length=100)
    icon = models.FileField(upload_to='api/bucket/skill')

    def __str__(self):
        return self.name

    def __json__(self):
        return {
            'name': self.name,
            'icon': get_base64(self.icon.path)
        }

class   Bullet(models.Model):
    icon = models.ImageField(upload_to='api/bucket/bullet')
    header = models.CharField(max_length=100, default='')
    text = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.header

    def __json__(self):
        return {
            'icon': get_base64(self.icon.path),
            'header': self.header,
            'text': self.text
        }

class   Experience(models.Model):
    role = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    city = models.CharField(max_length=100, default='')
    country = models.CharField(max_length=100, default='')
    start_date = models.DateField(default='1900-01-01')
    end_date = models.DateField(default='1900-01-01')
    summary = models.CharField(max_length=300)

    def __str__(self):
        return self.role

    def __json__(self):
        return {
            'role': self.role,
            'company': self.company,
            'city': self.city,
            'country': self.country,
            'start_date': str(self.start_date),
            'end_date': str(self.end_date),
            'summary': self.summary
        }

class   Bio(models.Model):
    timestamp = models.DateField(auto_now=True)
    text = models.CharField(max_length=500)
    image = models.ImageField(upload_to='api/bucket/bio')

    def __str__(self):
        return str(self.timestamp)

    def __json__(self):
        return {
            'text': self.text,
            'image': get_base64(self.image.path)
        }

admin.site.register(Project)
admin.site.register(Contact)
admin.site.register(Skill)
admin.site.register(Bullet)
admin.site.register(Experience)
admin.site.register(Bio)