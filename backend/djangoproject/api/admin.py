from django.contrib import admin

# Register your models here.
from .models import DrinkCategory, Drink, DrinkImage

admin.site.register(DrinkCategory)
admin.site.register(Drink)
admin.site.register(DrinkImage)
