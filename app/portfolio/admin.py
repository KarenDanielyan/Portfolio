from django.contrib import admin

# Register your models here.
from .models import SkillType, Profile, Skill, Project

class   SkillInline(admin.TabularInline):
    model = Skill
    extra = 1
    
class   SkillTypeAdmin(admin.ModelAdmin):
    inlines = [SkillInline]
    list_display = ('type', 'created_date')
    search_fields = ('type', 'created_date')

class   SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'created_date')
    list_filter = ('type', 'created_date')
    search_fields = ('name', 'type')
    

admin.site.register(SkillType, SkillTypeAdmin)
admin.site.register(Profile)
admin.site.register(Skill, SkillAdmin)
admin.site.register(Project)