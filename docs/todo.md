- verificar versión python
```
python --version
```
- verificar versión pip
```
pip --version
```
- verificar version node.js
```
node --version
```
- instalar virtualenv
```
pip install virtualenv

python -m venv venv
```
- activar venv script
```

```
- opción activación venv en VS Code
```
F1  => python interpreter => buscar venv.venv //  shift + ctrl + p (win)
```
- instalar django
```
pip install django
```
- probar django-admin
```
django-admin
```
- crear proyecto django
```
django-admin startproject django_crud_api .
```
- cear app
```
python manage.py startapp c_backend
```
- project => settings.py => INSTALLED_APPS => agregar tasks
- ejecutar migraciones
```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```
- instalar djangorestframework
```
pip install djangorestframework
```
- instalar django-cors-headers para permitir comunicar front y back (servidores)
```
pip install django-cors-headers
```
- en settings.py añadir
```
INSTALLED_APPS
'corsheaders',
'rest_framework',
'tasks'
```
```
MIDDLEWARE...
'corsheaders.middleware.CorsMiddleware',
'django.middleware.common.CommonMiddleware',
```
```
# cors authorization
CORS_ALLOWED_ORIGINS = [
  "http://localhost:8080"
]
```
- modelos - cipetri => models.py
acreedores
balances
clientes
comisionistas
destino
dolares-consulta
dolares-planilla
estado-pago
gastos-planilla
ingreso-compras
libro-diario
liquidaciones
medios-pago
usuarios
```
class Task(models.Model):
  title = models.CharField(max_length=200)
  description = models.TextField(blank = True)
  done = models.BooleanField(default = False)
```
```
python manage.py makemigrations
python manage.py migrate
```
- crear usuario administrador panel admin
```
python manage.py createsuperuser
```
- en tasks => admin.py agregar proyecto para poder verlo desde admin
```
from .models import Task

admin.site.register(Task)
```

---

# Django REST Framework
- seleccionar datos a enviar desde el backend y convertirlos en JSON
- agregar en tasks => serializer.py
```
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
  class Meta:
    model = Task
    #fields = ('id', 'tilte', description', 'done')
    fields = '__all__'
```
- crear vistas => views.py
```
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

class TaskView(viewsets.ModelViewSet):
  serializer_class = TaskSerializer
  queryset = Task.objects.all()

  IMPORTANTE: COMANDO QUE NOS AYUDO CON EL ERROR
  python manage.py migrate --run-syncdb

  IMPORTANTE: Las clases deben estar en orden tal que si mi foranea es Teacher la clase Teacher debe estar encima de la clase donde uso la foranea

``` 
- crear en task => urls.py
```
from django.urls import path, include
from rest_framework import routers
from tasks import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
  path("api/v1/", include(router.urls))
]
```
- en urls.py del proyecto
```
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
  path('admin/', admin.site.urls),
  path('tasks/', include('tasks.urls'))
]
```
- instalar thunder_client para pruebas API REST
- agregar módulo para auto documentación
```
pip install coreapi

settings.py
INSTALLED_APPS
...
'coreapi',
'tasks'

...

REST_FRAMEWORK = {
  'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
}

```
- en urls.py de tasks agregar
```
from rest_framework.documentation import include_docs_urls


urlpattens
...
path('docs/', include_docs_urls(title='Tasks API'))
```

---

# FRONTEND CLIENT - REACT