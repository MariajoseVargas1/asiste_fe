import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Observable } from 'rxjs';
import { TablaasistenciaService } from 'src/app/tablaasistencia.service';
import { error } from 'jquery';

interface Asistenciatabla {
  id: number;
  nombre: string;
  asiste: string;
  ficha: number;
  competencia: string;
  acciones: any;
}

@Component({
  selector: 'app-grid-instructor',
  templateUrl: './grid-instructor.component.html',
})
export class GridInstructorComponent {
  aprendices: Asistenciatabla[] = [];

  constructor(private tablaasistencia: TablaasistenciaService) {}

  ngOnInit(): void {
    this.tablaasistencia.getListaasistencia(193412661).subscribe({
      next: (respuesta) => {
       respuesta.forEach((element:any)=> {
        this.aprendices.push({
          id: element.documento_aprendiz,
          nombre: element.nombres_aprendiz,
          ficha: element.ficha_aprendiz,
          competencia: element.ficha_details.horario_ficha[0].asignatura,
          asiste: element.email_personal_aprendiz,
          acciones: element.email_institucional_aprendiz

        })
       });
      
      },
      error: (error) => console.error(error),
    });
  }
}
