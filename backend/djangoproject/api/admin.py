from django.contrib import admin

# Register your models here.
from .models import DrinkCategory, Drink, User, Order, DrinkOrder

admin.site.register(DrinkCategory)
admin.site.register(Drink)
admin.site.register(User)

admin.site.register(Order)
admin.site.register(DrinkOrder)
