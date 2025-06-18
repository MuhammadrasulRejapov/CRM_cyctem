# customers/tests.py
from django.test import TestCase
from .models import Customer

class CustomerModelTest(TestCase):
    def setUp(self):
        Customer.objects.create(
            name="Test Customer",
            phone="+998901234567",
            address="Test Address",
            email="test@example.com"
        )

    def test_customer_creation(self):
        customer = Customer.objects.get(name="Test Customer")
        self.assertEqual(customer.email, "test@example.com")
        self.assertEqual(customer.phone, "+998901234567")