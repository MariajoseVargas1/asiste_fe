import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  autenticacionuser(body:any):Observable<any>{
    return this.http.post<any>("http://127.0.0.1:8000/users/token/",body)
  }
}
