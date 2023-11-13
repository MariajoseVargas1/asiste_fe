import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-aprendiz',
  templateUrl: './perfil-aprendiz.component.html'
})
export class PerfilAprendizComponent {
  primeraVista = true;
  segundaVista = false;

  vista2() {
    this.primeraVista = false;
    this.segundaVista = true;
  }

}
