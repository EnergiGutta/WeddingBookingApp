from ninja import Schema
from typing import List, Optional
from datetime import datetime

class DrinkOrderSchema(Schema):
    '''Schema for drink order'''
    drink_id: int
    quantity: int


class OrderSchema(Schema):
    '''Schema for orders'''
    user_id: int
    drink_orders: List[DrinkOrderSchema]


class OrderResponseSchema(Schema):
    '''Schema for order response'''
    id: int
    user_id: int
    order_received_time: datetime
    order_delivered_time: Optional[datetime]
    drink_orders: List[DrinkOrderSchema]


class UserSchema(Schema):
    '''Schema to register user'''
    id: int
    name: str
    image: str|None = None