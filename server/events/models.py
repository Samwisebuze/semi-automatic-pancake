from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    slug = models.SlugField(unique=True)
    location = models.CharField(max_length=255)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
 