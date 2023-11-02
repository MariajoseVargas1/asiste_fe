import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(private router: Router, private location: Location) {}

  onBotonClick(): void {
    this.router.navigateByUrl('/inicio');
    this.location.replaceState('/inicio');
  }
}
