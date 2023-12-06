import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';



@Component({
  selector: 'app-add-asistencia',
  templateUrl: './add-asistencia.component.html'
})
export class AddAsistenciaComponent {
user: any;

  constructor(private service: UsersService, private router: Router){}
  
    // ngOnInit(): void {
    // }

    data: any

    form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      asistio: new FormControl('', Validators.required),
      ficha: new FormControl('', Validators.required),
      competencia: new FormControl('', Validators.required)
    });

    addUser() {
      this.data = this.form.value;
      this.service.addUser(this.data).subscribe(data => {
        // redirect to home page
        this.router.navigate(['/']);
      });
    }

}