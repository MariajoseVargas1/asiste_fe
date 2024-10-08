import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { StatusAsistenciaComponent } from './components/status-asistencia/status-asistencia.component';
import { PreguntasFrecuentesComponent } from './components/preguntas-frecuentes/preguntas-frecuentes.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { GridAprendizComponent } from './components/grid-aprendiz/grid-aprendiz.component';
import { GridInstructorComponent } from './components/grid-instructor/grid-instructor.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { RegistroNovedadComponent } from './components/registro-novedad/registro-novedad.component';
import { NotificacionesAprendizComponent } from './components/notificaciones-aprendiz/notificaciones-aprendiz.component';
import { PerfilAprendizComponent } from './components/perfil-aprendiz/perfil-aprendiz.component';
import { PerfilInstructorComponent } from './components/perfil-instructor/perfil-instructor.component';
import { InicioInstructorComponent } from './components/inicio-instructor/inicio-instructor.component';
import { DataCoordinacionComponent } from './components/data-coordinacion/data-coordinacion.component';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ChartModule } from 'primeng/chart'; 
import { NgApexchartsModule } from 'ng-apexcharts';
import { AgGridModule } from 'ag-grid-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AddAsistenciaComponent } from './components/add-asistencia/add-asistencia.component';
import { EditAsistenciaComponent } from './components/edit-asistencia/edit-asistencia.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    StatusAsistenciaComponent,
    PreguntasFrecuentesComponent,
    HowToComponent,
    ForgotComponent,
    GridAprendizComponent,
    GridInstructorComponent,
    HorariosComponent,
    RegistroNovedadComponent,
    NotificacionesAprendizComponent,
    PerfilAprendizComponent,
    PerfilInstructorComponent,
    InicioInstructorComponent,
    DataCoordinacionComponent,
    AddAsistenciaComponent,
    EditAsistenciaComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule,// mirar si lo cambio por horarios
    NgApexchartsModule,
    ChartModule,
    AgGridModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
