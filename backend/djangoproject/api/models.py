from django.db import models


class DrinkCategory(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.name


class Drink(models.Model):
    id = models.AutoField(primary_key=True)
    category_id = models.ForeignKey(DrinkCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    contents = models.JSONField()
    description = models.TextField()
    is_available = models.BooleanField(unique=False)

    def __str__(self): 
        return self.name
    
class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    is_authenticated = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.name
    

class Order(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    order_recived_time = models.DateTimeField(auto_now_add=True)
    order_delivered_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.drink.name
    
class DrinkImage(models.Model):
    id = models.AutoField(primary_key=True)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images/', null=True, blank=True)

    def __str__(self):
        return self.drink.name + ' Image'

'''
class Review(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)
    rating = models.IntegerField()
    review = models.TextField()
    review_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.drink.name
'''