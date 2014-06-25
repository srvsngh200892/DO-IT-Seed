from django.db import models
from datetime import datetime

class Contributor(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    contact = models.CharField(max_length=40)


class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    contributor = models.ManyToManyField(Contributor, null=True, related_name='project')


class Task(models.Model):
    task = models.CharField(max_length=255)
    description = models.TextField(null=True)
    priority = models.CharField(max_length=25)
    status = models.CharField(max_length=25)
    assigned_to = models.ForeignKey(Contributor)
    project = models.ForeignKey(Project)
    due_date = models.DateField()
    closed_on = models.DateField(null=True) 
    created_at = models.DateField(default=datetime.now())
    
    
class Comment(models.Model):
    text = models.TextField()
    created_at = models.DateTimeField()
    commented_by = models.ForeignKey(Contributor)
    commented_on = models.ForeignKey(Task, related_name='comment')