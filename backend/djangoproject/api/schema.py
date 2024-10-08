from ninja import Schema

class DrinkImageSchema(Schema):
    id: int
    drink: int
    image: str  # This will hold the image URL