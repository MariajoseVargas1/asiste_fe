# Generated by Django 4.2.7 on 2023-11-29 05:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('a_backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AsistenciaAsistencia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('presente', models.CharField(max_length=45)),
            ],
        ),
    ]
