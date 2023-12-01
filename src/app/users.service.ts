import { Injectable } from '@angular/core';
import User from './Users';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = "http://localhost:8000/api/v1"

  constructor(private http: HttpClient) { }

  //anadir usuario == metodo http post == esto es para añadir asistencia 
  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }
 //obtener usuarios == metodo http get
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
 //obtener usuario == metodo http get
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}${id}`);
  }
 //actualizar usuario == metodo http put
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.url}${id}/`, user);
  }
 //eliminar usuario == metodo http delete-- no es pertinente para el caso por lo mismo no se implemento,de hacer solo debe quitarse el comentario
  // deleteUser(id: number): Observable<User> {
  //   return this.http.delete<User>(`${this.url}${id}/`);
  // }

}
