import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrera } from '../Models/carreras.model';

@Injectable({
  providedIn: 'root',
})
export class CarreraListService {
  private apiUrl = 'http://localhost:3000/carrera';

  constructor(private http: HttpClient) {}

  getCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.apiUrl);
  }
}
