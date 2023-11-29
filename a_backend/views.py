from django.shortcuts import render
from rest_framework import viewsets #para acceder a los datos y mostrarlos en pantalla
from .serializer import AsistenciaAprendizSerializer
from .serializer import AsistenciaAsistenciaSerializer
from .serializer import AsistenciaCoordinacionSerializer
from .serializer import AsistenciaFichaSerializer
from .serializer import AsistenciaFichaHorarioFichaSerializer
from .serializer import AsistenciaHorarioPorDiaSerializer
from .serializer import AsistenciaInstructorSerializer
from .serializer import AsistenciaNovedadSerializer
from .serializer import AsistenciaProgramaSerializer
from .models import AsistenciaAprendiz
from .models import AsistenciaAsistencia
from .models import AsistenciaCoordinacion
from .models import AsistenciaFicha
from .models import AsistenciaFichaHorarioFicha
from .models import AsistenciaHorarioPorDia
from .models import AsistenciaInstructor
from .models import AsistenciaNovedad
from .models import AsistenciaPrograma


# Aqui se crean las views o las vistas
class AsistenciaAprendizView(viewsets.ModelViewSet):
  serializer_class = AsistenciaAprendizSerializer
  queryset = AsistenciaAprendiz.objects.all()#muestra el resultado serializado=convertido a JSON


class AsistenciaAsistenciaView(viewsets.ModelViewSet):
  serializer_class = AsistenciaAsistenciaSerializer
  queryset = AsistenciaAsistencia.objects.all()#muestra el resultado serializado=convertido a JSON

class AsistenciaCoordinacionView(viewsets.ModelViewSet):
  serializer_class = AsistenciaCoordinacionSerializer
  queryset = AsistenciaCoordinacion.objects.all()#muestra el resultado serializado=convertido a JSON


class AsistenciaFichaView(viewsets.ModelViewSet):
  serializer_class = AsistenciaFichaSerializer
  queryset = AsistenciaFicha.objects.all()#muestra el resultado serializado=convertido a JSON


class AsistenciaFichaHorarioFichaView(viewsets.ModelViewSet):
  serializer_class = AsistenciaFichaHorarioFichaSerializer
  queryset = AsistenciaFichaHorarioFicha.objects.all()#muestra el resultado serializado=convertido a JSON


class AsistenciaHorarioPorDiaView(viewsets.ModelViewSet):
  serializer_class = AsistenciaHorarioPorDiaSerializer
  queryset = AsistenciaHorarioPorDia.objects.all()#muestra el resultado serializado=convertido a JSON

class AsistenciaInstructorView(viewsets.ModelViewSet):
  serializer_class = AsistenciaInstructorSerializer
  queryset = AsistenciaInstructor.objects.all()#muestra el resultado serializado=convertido a JSON

class AsistenciaNovedadView(viewsets.ModelViewSet):
  serializer_class = AsistenciaNovedadSerializer
  queryset = AsistenciaNovedad.objects.all()#muestra el resultado serializado=convertido a JSON


class AsistenciaProgramaView(viewsets.ModelViewSet):
  serializer_class = AsistenciaProgramaSerializer
  queryset = AsistenciaPrograma.objects.all()#muestra el resultado serializado=convertido a JSON