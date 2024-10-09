from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class DrinkCategory(models.Model):
    '''The category of the drink'''
    name = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return str(self.name)


class Drink(models.Model):
    '''The drink table'''
    category = models.ForeignKey(DrinkCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    alcohol_percentage = models.FloatField(
        null=True, 
        blank=True, 
        validators=[MinValueValidator(0.0), MaxValueValidator(100.0)]
    )
    is_available = models.BooleanField(unique=False)
    image = models.ImageField(upload_to='images/drinks/', null=True, blank=True)

    def __str__(self):
        return str(self.name)


class CustomUserManager(BaseUserManager):
    '''Custom user class'''
    def create_user(self, name, password=None, **extra_fields):
        '''Function that creates a user. Does not need a password'''
        if not name:
            raise ValueError('The Name field must be set')
        user = self.model(name=name, **extra_fields)
        user.set_unusable_password()  # No password for regular users
        user.save(using=self._db)
        return user

    def create_superuser(self, username, name, password, **extra_fields):
        '''Function that creates a staff-user account with unique username'''
        if not username:
            raise ValueError('The Username field must be set for staff')
        if not password:
            raise ValueError('The password field must be set for staff')
        
        extra_fields.setdefault('is_staff', True)

        user = self.model(username=username, name=name, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

class User(AbstractBaseUser, PermissionsMixin):
    '''Table of the user'''
    username = models.CharField(max_length=150, unique=True, null=True, blank=True)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/users/', null=True, blank=True)
    password = models.CharField(max_length=128, null = True, blank = True)  # Add default value
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['name']

    def __str__(self):
        return str(self.name)
    

# class User(models.Model):
#     '''Table with user information'''
#     name = models.CharField(max_length=100)
#     is_authenticated = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)
#     image = models.ImageField(upload_to='images/users/', null=True, blank=True)


class Order(models.Model):
    '''Table with all orders received - one row per order'''
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    order_received_time = models.DateTimeField(auto_now_add=True)
    order_delivered_time = models.DateTimeField(null=True, blank=True)


class DrinkOrder(models.Model):
    '''The Fact table with each drink ordered'''
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    drink = models.ForeignKey(Drink, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    # Optional. if bartender should be able to checkout a subset of orders
    # order_delivered_time = models.DateTimeField(null=True, blank=True)