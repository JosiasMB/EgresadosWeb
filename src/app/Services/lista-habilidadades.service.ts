import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habilidad } from '../Models/habilidades.model';

@Injectable({
  providedIn: 'root',
})
export class HabilidadListService {
  private apiUrl = 'http://localhost:3000/habilidades'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {}

  getHabilidades(): Observable<Habilidad[]> {
    let l;
    return (l = this.http.get<Habilidad[]>(this.apiUrl));
  }
}
