from rest_framework import serializers
from warehouse_server.models import Category, Product, Warehouse


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', "name", "description")


class WarehouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Warehouse
        fields = ('id', "name", "address")


class ProductSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False)
    warehouse = WarehouseSerializer(many=False)

    class Meta:
        model = Product
        fields = ('id', "name", "description", "price", "category", "warehouse", "quantity")



