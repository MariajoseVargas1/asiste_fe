import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
    year: number = new Date().getFullYear(); //para mantener el año actualizado
}
