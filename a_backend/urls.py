#Aqui se agregan las urls, los endpoints para conexiones, para poder usar el api rest
from django.urls import path, include#
from rest_framework import routers#la forma para enrutar las urls
from a_backend import views

router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')#la r es de routing

urlpatterns = [
  path("api/v1/", include(router.urls))#objeto router
]