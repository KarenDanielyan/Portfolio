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
    icon = models.ImageField(upload_to='api/bucket/skill')

    def __str__(self):
        return self.name

    def __json__(self):
        return {
            'name': self.name,
            'icon': get_base64(self.icon.path)
        }

class   Bullet(models.Model):
    icon = models.ImageField(upload_to='api/bucket/bullet')
    text = models.CharField(max_length=100)
    timestamp = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.text

    def __json__(self):
        return {
            'icon': get_base64(self.icon.path),
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

admin.site.register(Project)
admin.site.register(Contact)
admin.site.register(Skill)
admin.site.register(Bullet)
admin.site.register(Experience)