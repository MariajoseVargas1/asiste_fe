#Aqui se serializan los datos para pasarlos en formato JSON al front
from rest_framework import serializers
from .models import AsistenciaAprendiz
from .models import AsistenciaAsistencia
from .models import AsistenciaCoordinacion
from .models import AsistenciaFicha
from .models import AsistenciaFichaHorarioFicha
from .models import AsistenciaHorarioPorDia
from .models import AsistenciaInstructor
from .models import AsistenciaNovedad
from .models import AsistenciaPrograma

class AsistenciaAprendizSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaAprendiz
    fields = '_all_'

class AsistenciaAsistenciaSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaAsistencia
    fields = '_all_'

class AsistenciaCoordinacionSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaCoordinacion
    fields = '_all_'

class AsistenciaFichaSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaFicha
    fields = '_all_'

class AsistenciaFichaHorarioFichaSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaFichaHorarioFicha
    fields = '_all_'    


class AsistenciaHorarioPorDiaSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaHorarioPorDia
    fields = '_all_'    

class AsistenciaInstructorSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaInstructor
    fields = '_all_'    

class AsistenciaNovedadSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaNovedad
    fields = '_all_'    

class AsistenciaProgramaSerializer(serializers.ModelSerializer):
  class Meta:
    model = AsistenciaPrograma
    fields = '_all_'    