import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RegistroNovedadComponent } from './components/registro-novedad/registro-novedad.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { GridAprendizComponent } from './components/grid-aprendiz/grid-aprendiz.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { PerfilAprendizComponent } from './components/perfil-aprendiz/perfil-aprendiz.component';
// imports: [ RouterModule.forRoot(routes) ]
const routes: Routes = [
  {path: 'navbar', component: HeaderComponent},
  {path: 'inicio', component: GridAprendizComponent},
  {path: 'horarios', component: HorariosComponent},
  {path: 'regis-novedad', component: RegistroNovedadComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'perfil-aprendiz', component: PerfilAprendizComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }