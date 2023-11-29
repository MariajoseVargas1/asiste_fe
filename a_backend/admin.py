from django.contrib import admin
from .models import AsistenciaAprendiz
from .models import AsistenciaAsistencia
from .models import AsistenciaCoordinacion
from .models import AsistenciaFicha
from .models import AsistenciaFichaHorarioFicha
from .models import AsistenciaHorarioPorDia
from .models import AsistenciaInstructor
from .models import AsistenciaNovedad
from .models import AsistenciaPrograma


# Register your models here.

admin.site.register(AsistenciaAprendiz)
admin.site.register(AsistenciaAsistencia)
admin.site.register(AsistenciaCoordinacion)
admin.site.register(AsistenciaFicha)
admin.site.register(AsistenciaFichaHorarioFicha)
admin.site.register(AsistenciaHorarioPorDia)
admin.site.register(AsistenciaInstructor)
admin.site.register(AsistenciaNovedad)
admin.site.register(AsistenciaPrograma)
