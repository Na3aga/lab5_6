from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class InfoDiv(models.Model):
    header = models.CharField(max_length=100)
    publication = models.DateTimeField(auto_now_add=True)
    publicator = models.ForeignKey(User,
                                   related_name="pages", on_delete=models.CASCADE,
                                   null=True)

# class WelcomePageDiv(models.Model):
#     big_image = models.ImageField()
