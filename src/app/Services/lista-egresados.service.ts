import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Egresado } from '../Models/egresado.model';

@Injectable({
  providedIn: 'root',
})
export class EgresadoListService {
  private apiUrl =
    'http://localhost:3000/egresado?_embed=experienciaLaboralEgresado';
  constructor(private http: HttpClient) {}

  getEgresados(): Observable<Egresado[]> {
    return this.http.get<Egresado[]>(this.apiUrl);
  }
}
