from django.shortcuts import render
from rest_framework.response import Response
from .form import RegistrationForm
from django.contrib.auth.models import User
from rest_framework.decorators import api_view, permission_classes
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, logout
from rest_framework.permissions import IsAuthenticated
from .serializer import UserSerializer
from .form import ProductForm
from .models import Product, Country, Category
from .serializer import ProductSerializer, CountrySerializer, CategorySerializer


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.data)
        if form.is_valid():
            form.save()
            return Response({'msg': 'Success'})
        else:
            return Response({'errors': form.errors})


@api_view(['POST'])
def signIn(request):
    username = request.data['username']
    password = request.data['password']
    if not username or not password:
        return Response({'error': "Provid username or password"})
    user = authenticate(request, username=username, password=password)
    if not user:
        return Response({'error': 'Invalid username or password'})
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})


@api_view(['GET'])
@permission_classes([IsAuthenticated, ])
def profile(request):
    print(request.user)
    return Response({'user': UserSerializer(request.user).data})


@api_view(['POST'])
@permission_classes([IsAuthenticated, ])
def addProduct(request):
    if request.method == 'POST':
        request.data['user'] = request.user.id
        request.data['user'] = request.user.id
        form = ProductForm(request.data, request.FILES)
        if form.is_valid():
            form.save()
            return Response({'msg': 'ok'})
        else:
            return Response({'errors': form.errors})


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    return Response({'products': ProductSerializer(products, many=True).data})


@api_view(['GET'])
def getCountry(request):
    country = Country.objects.all()
    return Response({'country': CountrySerializer(country, many=True).data})


@api_view(['GET'])
def getCategory(request):
    category = Category.objects.all()
    return Response({'category': CategorySerializer(category, many=True).data})


@api_view(['Get'])
def getProductById(request):
    product = Product.object.get(pk=id)
    return Response({'product': ProductSerializer(product).data})


@api_view(['GET'])
@permission_classes([IsAuthenticated,])
def logout_user(request):
    request.user.auth_token.delete()
    logout(request)
    return Response({'msg': 'ok'})
