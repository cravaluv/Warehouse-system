# Generated by Django 2.2.1 on 2019-05-15 11:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('warehouse_server', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=30)),
                ('price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='warehouse_server.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Product_Warehouse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.FloatField()),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='warehouse_server.Product')),
            ],
        ),
        migrations.CreateModel(
            name='Warehouse',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('address', models.CharField(max_length=100)),
                ('products', models.ManyToManyField(through='warehouse_server.Product_Warehouse', to='warehouse_server.Product')),
            ],
        ),
        migrations.DeleteModel(
            name='Bucketlist',
        ),
        migrations.AddField(
            model_name='product_warehouse',
            name='warehouse',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='warehouse_server.Warehouse'),
        ),
    ]
