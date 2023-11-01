from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Country, Category, Product


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CountrySerializer(ModelSerializer):
    class Meta:
        model = Country
        fields = '__all__'


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(ModelSerializer):
    category = CategorySerializer()
    country = CountrySerializer(many=True)
    user = UserSerializer()

    class Meta:
        model = Product
        fields = '__all__'
