import os
from django.shortcuts import render
from django.core.serializers import serialize
from django.http import JsonResponse
from django.core.files.storage import FileSystemStorage

# Create your views here.
from djangoproject import settings
from ninja import NinjaAPI
from api.models import Drink, DrinkImage
from api.schema import DrinkImageSchema

api = NinjaAPI()


@api.get("/hello")
def hello(request, name: str = "knall"):
    return {"message": f"Hello {name}"}


@api.get("/drinks")
def list_drinks(request):

    # Query database and retrieve QuerySet
    drinks = Drink.objects.values()

    # Create response
    return JsonResponse(list(drinks), safe=False)


@api.get("/drink_images")
def get_image(request):
    images = DrinkImage.objects.all()
    images_data = [
        {"id": image.id, "drink": image.drink.id, "image": image.image.url}
        for image in images
    ]

    return JsonResponse(images_data, safe=False)


@api.get("/drink_image/", response=DrinkImageSchema)
def get_image(request, image_id: int):
    image = DrinkImage.objects.get(id=image_id)
    image_url = image.image.url
    return {"id": image.id, "drink": image.drink.id, "image": image_url}
