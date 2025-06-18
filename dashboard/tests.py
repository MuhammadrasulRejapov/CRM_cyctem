# dashboard/tests.py
from django.test import TestCase
from .models import Product, Category

class ProductModelTest(TestCase):
    def setUp(self):
        category = Category.objects.create(name="Test Category")
        Product.objects.create(
            name="Test Product",
            description="Test Description",
            price=100,
            stock_quantity=10,
            category=category
        )

    def test_product_creation(self):
        product = Product.objects.get(name="Test Product")
        self.assertEqual(product.price, 100)
        self.assertTrue(product.is_in_stock)