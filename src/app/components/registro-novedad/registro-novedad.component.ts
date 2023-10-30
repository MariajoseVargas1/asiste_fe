import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-novedad',
  templateUrl: './registro-novedad.component.html'
})
export class RegistroNovedadComponent {
  parte1Visible = true;
  parte2Visible = false;

  mostrarParte2() {
    this.parte1Visible = false;
    this.parte2Visible = true;
  }
}


