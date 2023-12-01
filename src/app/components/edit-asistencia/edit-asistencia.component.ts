import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import User from 'src/app/Users';

@Component({
  selector: 'app-edit-asistencia',
  templateUrl: './edit-asistencia.component.html'
})
export class EditAsistenciaComponent {

  user?: any
  data: any


  constructor(private service: UsersService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.service.getUser(id).subscribe(data => {
      this.user = data
      console.log(this.user)
    })
  }

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    asistio: new FormControl('', [Validators.required]),
    competencia: new FormControl('', [Validators.required])
  })

  submit(){
    this.data = this.form.value
    this.user.nombre = this.data.nombre
    this.user.asistio = this.data.asistio
    this.user.competencia = this.data.competencia
    console.log(this.data)
    
    this.service.updateUser(this.user?.id, this.user).subscribe(data => {
      console.log(data)
    })

    this.router.navigate(['/']);
  }
  
}
