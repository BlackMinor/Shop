from django.db import models

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User


class Country(models.Model):
    country_name = models.CharField(max_length=100)


class Category(models.Model):
    category_name = models.CharField(max_length=100)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    count = models.IntegerField()
    description = models.CharField(max_length=300)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images')
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    country = models.ManyToManyField(Country)
    rating = models.IntegerField(default=3)
