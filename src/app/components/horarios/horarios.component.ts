import {Component, ViewChild, ElementRef,AfterContentInit,} from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';


@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
})
export class HorariosComponent {
  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: '', //ESTO ES PARA LO QUE SE VE AL LADO IZQUIERDO DEL CALENDARIO POR AHORA ESTA VACIO
      center: 'title',
      // right: 'dayGridMonth,timeGridWeek,timeGridDay',// ESTO ES PARA LO QUE SE VE AL LADO DERECHO DEL CALENDARIO
    },

    locale: esLocale,

    eventDurationEditable: false,
    visibleRange: {
      start: '2023-10-02',
      end: '2023-12-16',
    },
    events: [
      {
        title: 'Derec Fun Al Trabajo',
        start: '2023-10-02 T09:00:00',
        daysOfWeek: [1], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#0CABA8', // Color del evento
        borderColor: '#0CABA8', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Lorena Medina "412"',
        id: 'Clase-lunes',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
      {
        title: 'Despliegue Fullstack',
        start: '2023-10-02 T09:00:00',
        style:"cursor: pointer",
        daysOfWeek: [2], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#008F8C', // Color del evento
        borderColor: '#008F8C', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Erick Granados "509"',
        id: 'Clase-martes',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
      {
        title: 'Despliegue Fullstack',
        start: '2023-10-02 T09:00:00',
        daysOfWeek: [3], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#0CABA8', // Color del evento
        borderColor: '#0CABA8', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Erick Granados "509"',
        id: 'Clase-miercoles',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
      {
        title: 'Migración y Testing',
        start: '2023-10-02 T09:00:00',
        daysOfWeek: [4], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#008F8C', // Color del evento
        borderColor: '#008F8C', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Paola Ballen "509"',
        id: 'Clase-jueves',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
      {
        title: 'Asesoría De Proyecto',
        start: '2023-10-02 T09:00:00',
        daysOfWeek: [5], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#0CABA8', // Color del evento
        borderColor: '#0CABA8', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Paola Ballen "509"',
        id: 'Clase-viernes',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
      {
        title: 'Investigación - Etica',
        start: '2023-10-02 T09:00:00',
        daysOfWeek: [6], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#008F8C', // Color del evento
        borderColor: '#008F8C', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Andrea Ramos "408"',
        id: 'Clase-sabado1',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
      {
        title: 'Medio Ambiente Y SST',
        start: '2023-10-02 T09:00:00',
        daysOfWeek: [6], // Esto significa que el evento ocurre solo los lunes
        // display: 'background', // Esto muestra el evento como fondo
        backgroundColor: '#0CABA8', // Color del evento
        borderColor: '#0CABA8', // Color del borde del evento
        startEditable: false,
        durationEditable: false,
        overlap: false,
        description: 'Omar Rueda "210"',
        id: 'Clase-sabado2',
        constraint: 'businessHours', // Esto asegura que el evento se presenta en horas laborales
        ranges: [
          {
            start: '2023-10-02', // Fecha de inicio
            end: '2023-12-16', // Fecha de fin
          },
        ],
      },
    ],
    eventClick: this.handleEventClick.bind(this),
    plugins: [dayGridPlugin],
  };

  handleEventClick(clickInfo: EventClickArg) {
    const description = clickInfo.event.extendedProps
      ? clickInfo.event.extendedProps['description']
      : '';
    alert('Evento: ' + clickInfo.event.title + '\nDescripción: ' + description);//para cambiar por un modal en lugar el alert
  }

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
}


//aqui tengo que ver como arreglar que las descripciones se vean mejor
