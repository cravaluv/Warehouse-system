from django.urls import path
from warehouse_server import views

urlpatterns = [
    path('categories/', views.category_list),
    path('categories/<int:pk>', views.category_detail),
    path('products/', views.product_list),
    path('products/<int:pk>', views.product_detail),
    path('warehouses/', views.warehouse_list),
    path('warehouses/<int:pk>', views.warehouse_detail),
]