from rest_framework import serializers
from warehouse_server.models import Category, Product, Warehouse


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("name", "description")


class WarehouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Warehouse
        fields = ("name", "address")


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False)
    warehouse = WarehouseSerializer(many=False)

    class Meta:
        model = Product
        fields = ("name", "description", "price", "category", "warehouse", "quantity")



