import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { StatusAsistenciaComponent } from './components/status-asistencia/status-asistencia.component';
import { RegistroNovedadComponent } from './components/registro-novedad/registro-novedad.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
// imports: [ RouterModule.forRoot(routes) ]
const routes: Routes = [
  {path: 'navbar', component: HeaderComponent},
  {path: 'inicio', component: StatusAsistenciaComponent},
  {path: 'regis-novedad', component: RegistroNovedadComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }