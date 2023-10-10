import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  private nombre_app:string = 'ASISTE';
  private year : number = new Date().getFullYear(); //para mantener el año actualizado

  getNombreApp(): string{
    return this.nombre_app;
  }

  getYear(): number{
    return this.year;
  }
}


