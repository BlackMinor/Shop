# Generated by Django 4.2.6 on 2023-10-30 08:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0002_product_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='country',
            field=models.ManyToManyField(to='project.country'),
        ),
        migrations.AlterField(
            model_name='product',
            name='rating',
            field=models.IntegerField(default=3),
        ),
    ]
