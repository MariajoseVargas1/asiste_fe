import { Component, AfterViewInit, OnInit } from '@angular/core';


@Component({
  selector: 'app-status-asistencia',
  templateUrl: './status-asistencia.component.html',
})
export class StatusAsistenciaComponent implements OnInit {

  title = 'GFG';
  asistenciaEstudiante = {
    'Derecho fundamental al trabajo': 21, // Ejemplo: ha excedido el 20% de fallas
    'Despliegue Fullstack': 15.23,
    'Este es repetido ver si solo dejo uno': 15.23,
    'Migración y Testing':8.3,
    'Asesoría de Proyecto':25,// Ejemplo: ha excedido el 20% de fallas
    'Ambiental':0.2,
    'Salud y seguridad en el trabajo':0.2,
    // Agregar más asignaturas según sea necesario
  };

  asistenciaArray = Object.values(this.asistenciaEstudiante);
  asignaturas = Object.keys(this.asistenciaEstudiante);

  backgroundColors = this.asistenciaArray.map(asis => (asis > 20) ? 'red' : this.getColor());

  data = {
    datasets: [
      {
        data: this.asistenciaArray,
        label: 'Su porcentaje de fallas es de',
        backgroundColor: this.backgroundColors,
        // borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
    labels: this.asignaturas.map((asig, index) => `${asig} (${this.asistenciaArray[index]}%)`),

    
  };

  chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
    scales: {
      r: {
        grid: {
          color: '#ebedef',
        },
        ticks: {
          precision: 1,
          color: '#495057',
        },
      },
    },
  };

  ngOnInit() {
    this.verificarBajaAsistencia();
    this.asistenciaArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; // Valores de 10 en 10 hasta 100
  }

  verificarBajaAsistencia() {
    const porcentajeMinimo = 20;
    const asistenciaBaja = this.asistenciaArray.filter(asis => asis >= porcentajeMinimo);
  
    if (asistenciaBaja.length > 0) {
      for (let i = 0; i < asistenciaBaja.length; i++) {
        const indice = this.asistenciaArray.findIndex(asis => asis === asistenciaBaja[i]);
        this.manejarBajaAsistencia(this.asignaturas[indice], asistenciaBaja[i]);
      }
    } else {
      console.log(`El estudiante tiene asistencia mayor al ${porcentajeMinimo}% en todas las asignaturas.`);
    }
  }

  manejarBajaAsistencia(asignatura: string, porcentaje: number) {
    const mensaje = `Su nivel de fallas equivale al ${porcentaje}% en la competencia de ${asignatura}. ¡!`;
    alert(mensaje);
  }
  getColor() {
    const colors = ['lightblue', 'lavender', 'lightgreen']; // Tonos claros para asignaturas que no superan el 20%
    return colors[Math.floor(Math.random() * colors.length)];
  }
}

























































//   title = 'GFG';
//   asistencia = [6, 3]; // Faltas a 'Fundamentos' y 'Otras clases', respectivamente

//   data = {
//     datasets: [
//       {
//         data: this.asistencia,
//         label: 'Su porcentaje de fallas es de',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//     labels: [
//            'Derecho fundamental al trabajo',
//            'Despliegue Fullstack',
//             'Despliegue Fullstack',
//             'Migración y Testing',
//             'Asesoría de Proyecto',
//             'Medio Ambiente y SST',
//           ],
//   };

//   chartOptions = {
//     plugins: {
//       legend: {
//         labels: {
//           color: '#495057',
//         },
//       },
//     },
//     scales: {
//       r: {
//         grid: {
//           color: '#ebedef',
//         },
//         ticks: {
//           precision: 1,
//           color: '#495057',
//         },
//       },
//     },
//   };

//   ngOnInit() {
//     this.verificarBajaAsistencia();
//   }

//   verificarBajaAsistencia() {
//     const porcentajeMinimo = 20.5;
//     const asistenciaBaja = this.asistencia.filter(asis => asis < porcentajeMinimo);

//     if (asistenciaBaja.length > 0) {
//       const indice = this.asistencia.findIndex(asis => asis === asistenciaBaja[0]);
//       this.manejarBajaAsistencia(this.data.labels[indice], asistenciaBaja[0]);
//     } else {
//       console.log(`Todos los cursos tienen asistencia mayor al ${porcentajeMinimo}%`);
//     }
//   }

//   manejarBajaAsistencia(curso: string, porcentaje: number) {
//     console.log(`El curso ${curso} tiene una asistencia del ${porcentaje}%. ¡Necesita atención!`);
//   }
// }















































































//   title = 'GFG';
//   asistencia = [80, 90, 70, 85, 60];
  
//   // Inicialización de data y chartOptions
//   data = {
//     datasets: [
//       {
//         data: this.asistencia,
//         label: 'Su porcentaje de fallas es de',
//         backgroundColor: 'rgba(255, 99, 132, 0.2)',
//         borderColor: 'rgba(255, 99, 132, 1)',
//         borderWidth: 1,
//       },
//     ],
//     labels: [
//       'Derecho fundamental al trabajo',
//       'Despliegue Fullstack',
//       'Despliegue Fullstack',
//       'Migración y Testing',
//       'Asesoría de Proyecto',
//       'Medio Ambiente y SST',
//     ],
//   };

//   chartOptions = {
//     plugins: {
//       legend: {
//         labels: {
//           color: '#495057',
//         },
//       },
//     },
//     scales: {
//       r: {
//         grid: {
//           color: '#ebedef',
//         },
//         ticks: {
//           precision: 1,
//           color: '#495057',
//         },
//       },
//     },
//   };

//   ngOnInit() {
//     this.verificarBajaAsistencia();
//   }

//   verificarBajaAsistencia() {
//     const porcentajeMinimo = 20.5;
//     const asistenciaBaja = this.asistencia.filter(asis => asis < porcentajeMinimo);

//     if (asistenciaBaja.length > 0) {
//       const indice = this.asistencia.findIndex(asis => asis === asistenciaBaja[0]);
//       this.manejarBajaAsistencia(this.data.labels[indice], asistenciaBaja[0]);
//     } else {
//       console.log(`Todos los estudiantes tienen asistencia mayor al ${porcentajeMinimo}%`);
//     }
//   }

//   manejarBajaAsistencia(clase: string, porcentaje: number) {
//     console.log(`La clase ${clase} tiene una asistencia del ${porcentaje}%. ¡Necesita atención!`);
//   }
// }

