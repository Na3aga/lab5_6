from django.db import models
from django.contrib.auth.models import User
import os
# Create your models here.


class InfoDiv(models.Model):
    header = models.CharField(max_length=100)
    publication = models.DateTimeField(auto_now_add=True)
    publicator = models.ForeignKey(User,
                                   related_name="pages", on_delete=models.CASCADE,
                                   null=True)


def photo_path(instance, filename):
    basefilename, file_extension = os.path.splitext(filename)
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    newname = str(instance.user_account.id)
    return 'pictures/{newname}{ext}'.format(newname=newname, ext=file_extension)


class UserInfo(models.Model):
    user_account = models.ForeignKey(User,
                                     related_name="user", on_delete=models.CASCADE,
                                     null=True)

    avatar = models.ImageField(upload_to=photo_path, blank=True)


class AppMedia(models.Model):
    model_pic = models.ImageField(
        upload_to='app_media/', default='app_media/no-img.jpg')
