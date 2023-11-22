import { Component, AfterViewInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-status-asistencia',
  templateUrl: './status-asistencia.component.html'
})
export class StatusAsistenciaComponent{

  title = 'GFG'; 
  data = { 
      datasets: [{ 
          data: [10,20,30,40,50,60,70,80,90], 

          label: 'Su porcentaje de fallas es'//texto que se muestra al pasar sobre alguna parte del grafico
      }, 

      ], 
      labels: ["Aaaaaaaaaa","B","C","D","E"] 
  }; 

  chartOptions = { 
      plugins: { 
          legend: { 
              labels: { 
                  color: '#495057' 
              } 
          } 
      }, 
      scales: { 
          r: { 
              grid: { 
                  color: '#ebedef' 
              } 
          } 
      } 
  } 
}