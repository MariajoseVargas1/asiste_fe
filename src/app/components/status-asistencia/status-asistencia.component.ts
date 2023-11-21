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
          data: [11,16,7,3,14], 

          label: 'Su porcentaje de fallas es'//mirar si dejo eso nose donde se muestra ni que muestra 
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





// 