import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-aprendiz',
  templateUrl: './perfil-aprendiz.component.html'
})
export class PerfilAprendizComponent {
  parte1Visible = true;
  parte2Visible = false;

  mostrarParte2() {
    this.parte1Visible = false;
    this.parte2Visible = true;
  }

}
