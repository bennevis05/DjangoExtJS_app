from django.urls import path, re_path

from .views import UserListOrCreate, UserDetailOrUpdateDelete


urlpatterns = [
    path('users/', UserListOrCreate.as_view()),
    path('users/<int:pk>/', UserDetailOrUpdateDelete.as_view()),
]
