import { Component, ViewChild } from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
})
export class HorariosComponent {
  @ViewChild('calendar')
  calendarComponent!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Derec Fund Al Trabajo', date: '2023-11-13' , description: 'Lorena Medina "412"'},
      { title: 'Despliegue Fullstack', date: '2023-11-14', description: 'Erick Granados "509"' },
      { title: 'Despliegue Fullstack', date: '2023-11-15', description: 'Erick Granados "509"' },
      { title: 'Migración y testing', date: '2023-11-16' , description: 'Paola Ballen "509"'},
      { title: 'Asesoria de proyecto', date: '2023-11-17' , description: 'Paola Ballen "509"'},
      { title: 'Investigación/Etica', date: '2023-11-18' , description: 'Andrea Ramos "408"'},
      { title: 'Medio ambiente y SST', date: '2023-11-18' , description: 'Omar Rueda "210"'},
    ],
    eventClick: this.handleEventClick.bind(this),
    plugins: [dayGridPlugin],
  };
  
  handleEventClick(clickInfo: EventClickArg) {
    const description = clickInfo.event.extendedProps ? clickInfo.event.extendedProps['description'] : '';
    alert('Evento: ' + clickInfo.event.title + '\nDescripción: ' + description);
  }
  
  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.next();
  }
}

//aqui tengo que ver como arreglar que las descripciones se vean mejor 