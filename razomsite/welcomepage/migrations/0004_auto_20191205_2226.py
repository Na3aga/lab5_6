# Generated by Django 2.2.7 on 2019-12-05 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('welcomepage', '0003_userinfo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='avatar',
            field=models.ImageField(max_length=255, upload_to='pictures'),
        ),
    ]
