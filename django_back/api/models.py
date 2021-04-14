from django.db import models


class User(models.Model):
    email = models.EmailField(blank=True, null=True)
    username = models.CharField(max_length=100, blank=True, null=True)
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    age = models.SmallIntegerField(blank=True, null=True)

    def __str__(self):
        return f'{self.email} - {self.username}'
