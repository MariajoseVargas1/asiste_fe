import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RegistroNovedadComponent } from './components/registro-novedad/registro-novedad.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { GridAprendizComponent } from './components/grid-aprendiz/grid-aprendiz.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PerfilAprendizComponent } from './components/perfil-aprendiz/perfil-aprendiz.component';
import { LoginComponent } from './pruebas/comp/login/login.component';
import { GridInstructorComponent } from './components/grid-instructor/grid-instructor.component';
import { DataCoordinacionComponent } from './components/data-coordinacion/data-coordinacion.component';
import { StatusAsistenciaComponent } from './components/status-asistencia/status-asistencia.component';
import { AddAsistenciaComponent } from './components/add-asistencia/add-asistencia.component';
import { EditAsistenciaComponent } from './components/edit-asistencia/edit-asistencia.component';
// imports: [ RouterModule.forRoot(routes) ]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'navbar', component: HeaderComponent },
  { path: 'inicio', component: StatusAsistenciaComponent},
  { path: 'horarios', component: HorariosComponent },
  { path: 'regis-novedad', component: RegistroNovedadComponent },
  { path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent },
  { path: 'perfil-aprendiz', component: PerfilAprendizComponent },
  { path: 'login-p', component: LoginComponent },
  { path: 'instructor', component: HeaderComponent },
  { path: 'aprendiz', component: HeaderComponent },
  { path: 'admin', component: DataCoordinacionComponent},
  { path: 'gridi', component: GridInstructorComponent},
  { path: 'edit-asistencia', component: EditAsistenciaComponent},
  { path: 'add-asistencia', component: AddAsistenciaComponent},
  // { path: '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
