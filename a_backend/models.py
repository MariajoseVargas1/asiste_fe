from django.db import models

# Create your models here.



class AsistenciaAprendiz(models.Model):
  documento_aprendiz = models.CharField(max_length=15)
  nombres_aprendiz = models.CharField(max_length=45)
  apellidos_aprendiz = models.CharField(max_length=45)
  email_personal_aprendiz = models.CharField(max_length=45)
  email_institucional_aprendiz = models.CharField(max_length=50)
  numero_celular = models.CharField(max_length=12)
  genero_aprendiz = models.CharField(max_length=10)
  ficha_aprendiz_id = models.IntegerField()
  tipo_documento = models.CharField(max_length=20)


class AsistenciaAsistencia(models.Model):
   fecha_asistencia = models.DateField
   presente = models.CharField(max_length=45)


class AsistenciaCoordinacion(models.Model):
    id_coordinacion = models.IntegerField()
    nombre_coordinacion = models.CharField(max_length=45)

class AsistenciaFicha(models.Model):
    id_ficha = models.IntegerField()
    nivel_formacion = models.CharField(max_length=20)

class AsistenciaFichaHorarioFicha(models.Model):
   ficha_id = models.CharField(max_length=9)
   horariopordia_id = models.IntegerField()

# # # class AsistenciaFichaInstructores(models.Model):
# # #  title = models.CharField(max_length=200)

class AsistenciaHorarioPorDia(models.Model):
    horario_id = models.IntegerField()
    dia = models.CharField(max_length=45)
    hora_entrada = models.DateTimeField()
    hora_salida = models.DateTimeField()
    salon = models.CharField(max_length=10)
    jornada = models.CharField(max_length=10)
    asignatura = models.CharField(max_length=45)

class AsistenciaInstructor(models.Model):
    documento = models.IntegerField() 
    nombres_instructor = models.CharField(max_length=45)
    apellidos_instructor = models.CharField(max_length=45)
    email_institucional = models.CharField(max_length=50)

# # # class AsistenciaInstructorRegistroAsistencia(models.Model):
# # #  title = models.CharField(max_length=200) 

class AsistenciaNovedad(models.Model):
    tipo_novedad = models.CharField(max_length=10)
    observaciones = models.TextField(max_length=100)
    archivo_adjunto = models.CharField(max_length=100) 
    estado_novedad = models.SmallIntegerField() 


class AsistenciaPrograma(models.Model):
    nombre_programa = models.CharField(max_length=45)  