import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grid-instructor',
  templateUrl: './grid-instructor.component.html',
})
export class GridInstructorComponent {
  users: any | undefined;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  //de implementarse el delete se debera quitar el comentario
  // deleteUser(id: number) {
  //   this.userService.deleteUser(id).subscribe(data => {
  //     console.log(data);
  //     this.ngOnInit();
  //   });
}
