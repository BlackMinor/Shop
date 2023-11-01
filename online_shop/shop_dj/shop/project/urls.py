from django.urls import path
from . import views

urlpatterns = [
    path('register', views.register),
    path('signIn', views.signIn),
    path('profile', views.profile),
    path('addProduct', views.addProduct),
    path('getPoduct', views.getProducts),
    path('getCategory', views.getCategory),
    path('getCountry', views.getCountry),
    path('getProduct/<int:id>', views.getProductById),
    path('logout', views.logout_user)
]
