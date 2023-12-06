import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private auth: LoginService,private router:Router) {}
  form = this.fb.group({
    document: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onClick() {
    console.log(this.form.value);
    this.auth.autenticacionuser(this.form.value).subscribe({
      next: (response) => {
        console.log('Autenticación exitosa');
        console.log(response);
        if (response.user_type==="INSTRUCTOR") {
          this.router.navigate(["/gridi"])
        } else if(response.user_type==="APRENDIZ"){
          this.router.navigate(["/inicio"])
        }else{
          this.router.navigate(["/admin"])
        }
      },
      error: (error) => console.error(error),
    });
  }
}
