import { Component, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
})
export class HorariosComponent{
  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      initialDate: '2023-01-01', // Fecha inicial
      eventDurationEditable: false,
    events: [
        {
            title: 'Reunión semanal',
            start: '2023-01-01T09:00:00',
            daysOfWeek: [1], // Esto significa que el evento ocurre solo los lunes
            display: 'background', // Esto muestra el evento como fondo
            backgroundColor: 'green', // Color del evento
            borderColor: 'green', // Color del borde del evento
            startEditable: false,
            durationEditable: false,
            overlap: false,
            id: 'repeatingEvent',
            constraint: 'businessHours', // Para asegurarte de que solo ocurra durante las horas laborales
            ranges: [
              {
                start: '2023-01-01', // Fecha de inicio
                end: '2023-12-31', // Fecha de fin
              },
            ],
          },
      {
        title: 'Despliegue Fullstack',
        date: '2023-11-14',
        description: 'Erick Granados "509"',
      },
      {
        title: 'Despliegue Fullstack',
        date: '2023-11-15',
        description: 'Erick Granados "509"',
      },
      {
        title: 'Migración y testing',
        date: '2023-11-16',
        description: 'Paola Ballen "509"',
      },
      {
        title: 'Asesoria de proyecto',
        date: '2023-11-17',
        description: 'Paola Ballen "509"',
      },
      {
        title: 'Investigación/Etica',
        date: '2023-11-18',
        description: 'Andrea Ramos "408"',
      },
      {
        title: 'Medio ambiente y SST',
        date: '2023-11-18',
        description: 'Omar Rueda "210"',
      },
    ],
    eventClick: this.handleEventClick.bind(this),
    plugins: [dayGridPlugin],
  };

  handleEventClick(clickInfo: EventClickArg) {
    const description = clickInfo.event.extendedProps
      ? clickInfo.event.extendedProps['description']
      : '';
    alert('Evento: ' + clickInfo.event.title + '\nDescripción: ' + description);
  }

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
}

//aqui tengo que ver como arreglar que las descripciones se vean mejor