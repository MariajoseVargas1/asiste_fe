# Generated by Django 4.2.7 on 2023-11-29 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('a_backend', '0002_asistenciaasistencia'),
    ]

    operations = [
        migrations.CreateModel(
            name='AsistenciaCoordinacion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_coordinacion', models.CharField(max_length=45)),
            ],
        ),
    ]