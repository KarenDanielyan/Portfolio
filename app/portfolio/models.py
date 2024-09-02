from django.db import models
from django.utils import timezone
from django.contrib import admin

# Create your models here.
class   SkillType(models.Model):
    type = models.CharField(max_length=20)
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.type
    
class   Profile(models.Model):
    name = models.CharField(max_length=100)
    url = models.URLField()

    def __str__(self):
        return self.name

class   Skill(models.Model):
    type = models.ForeignKey(SkillType, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name

class   Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    created_date = models.DateTimeField(default=timezone.now)
    url = models.URLField()

    def __str__(self):
        return self.name