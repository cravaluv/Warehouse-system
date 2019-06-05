from django.contrib import admin

# Register your models here.
from warehouse_server.models import Category, Warehouse, Product

admin.site.register(Category)
admin.site.register(Warehouse)
admin.site.register(Product)