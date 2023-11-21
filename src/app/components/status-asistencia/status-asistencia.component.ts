import { Component, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-status-asistencia',
  templateUrl: './status-asistencia.component.html'
})
export class StatusAsistenciaComponent implements AfterViewInit{

  ngAfterViewInit() {
    const options = {
      chart: {
        type: 'polarArea'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      },{
        name: 'clase',
        data: ['Base de datos','Java POO','Blablabla']
      },{
        name: 'trimestres',
        data: ['Primer trismestre','Segundo trimestre','Tercer trimestre']
      },{
        name: 'serie_vacia_1',
        data: []
      },{
        name: 'serie_vacia_2',
        data: []
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };

    const chart = new ApexCharts(document.querySelector('#polar-chart'), options);
    chart.render();
  }
}
