from django.db import models

# Create your models here.

class hkforms(models.Model):
    name = models.CharField(max_length = 30)
    email = models.CharField(max_length = 30)
    ph_no = models.CharField(max_length = 30)
    content = models.CharField(max_length = 500)