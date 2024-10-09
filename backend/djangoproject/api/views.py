# from django.shortcuts import render
# from django.core.serializers import serialize
# from django.core.files.storage import FileSystemStorage

# Create your views here.
from ninja import NinjaAPI
from ninja.files import UploadedFile
from django.conf import settings
from django.http import JsonResponse
from ninja.security import django_auth
from django.shortcuts import get_object_or_404
from django.core.files.base import ContentFile
from django.views.decorators.csrf import csrf_exempt

from .models import Drink, DrinkOrder, Order, User
from .schema import OrderResponseSchema, OrderSchema, DrinkOrderSchema, UserSchema

api = NinjaAPI(csrf=True)


@api.get("/hello")
def hello(request, name: str = "knallis"):
    '''Test of api. Returns a greeting with a selected name'''
    return {"message": f"Hello {name}"}


@api.get("/drinks")
def list_drinks(request):
    '''Get a list of drinks in the database'''
    # Query database and retrieve QuerySet
    drinks = Drink.objects.values()

    # Create response
    return JsonResponse(list(drinks), safe=False)

@csrf_exempt
@api.post("/register-user", response={201: UserSchema, 400: dict})
def register(request, name: str, image: UploadedFile = None):
    user = User(name=name)
    if image:
        user.image.save(image.name, ContentFile(image.read()))
    user.set_unusable_password()  # Set an unusable password
    user.save()
    return 201, user


@api.post("/order", response={201: OrderResponseSchema})
def make_order(request, payload: OrderSchema):
    user = get_object_or_404(User, id=payload.user_id)
    order = Order.objects.create(user=user)
    drink_orders = []
    for drink_order in payload.drink_orders:
        drink_order_instance = DrinkOrder.objects.create(
            order=order,
            drink_id=drink_order.drink_id,
            quantity=drink_order.quantity
        )
        drink_orders.append(drink_order_instance)
    
    order_response = OrderResponseSchema(
        id=order.id,
        user_id=order.user_id,
        order_received_time=order.order_received_time,
        order_delivered_time=order.order_delivered_time,
        drink_orders=[DrinkOrderSchema(drink_id=do.drink_id, quantity=do.quantity) for do in drink_orders]
    )
    return 201, order_response