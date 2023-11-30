#Aqui se agregan las urls, los endpoints para conexiones, para poder usar el api rest
from django.urls import path, include#
from rest_framework import routers#la forma para enrutar las urls
from a_backend import views

router = routers.DefaultRouter()
router.register(r'asistenciaaprendiz', views.AsistenciaAprendizView, 'asistenciaaprendiz')#la r es de routing
router.register(r'asistenciaasistencia', views.AsistenciaAsistenciaView, 'asistenciaasistencia')
router.register(r'asistenciacoordinacion', views.AsistenciaCoordinacionView, 'asistenciacoordinacion')
router.register(r'asistenciaficha', views.AsistenciaFichaView, 'asistenciaficha')
router.register(r'asistenciafichahorarioficha', views.AsistenciaFichaHorarioFichaView, 'asistenciafichahorarioficha')
router.register(r'asistenciahorariopordia', views.AsistenciaHorarioPorDiaView, 'asistenciahorariopordia')
router.register(r'asistenciainstructor', views.AsistenciaInstructorView, 'asistenciainstructor')
router.register(r'asistencianovedad', views.AsistenciaNovedadView, 'asistencianovedad')
router.register(r'asistenciaprograma', views.AsistenciaProgramaView, 'asistenciaprograma')

urlpatterns = [
  path("api/v1/", include(router.urls))#objeto router
]