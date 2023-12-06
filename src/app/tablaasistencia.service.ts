import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TablaasistenciaService {
  url: string = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getListaasistencia(documentoins: number): Observable<any> {
    const token = {
      Authorization: 'Token dc49adf7e89dd9910d158e5d6009c870cf4582a4',
    };
    const endpoint = `/asistencia/instructores/${documentoins}/lista_aprendices/`;
    return this.http.get<any>(`${this.url}${endpoint}`, { headers: token });
  }
}
