import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provincia } from '../Models/provincias.model';

@Injectable({
  providedIn: 'root',
})
export class ProvinciaListService {
  private apiUrl = 'http://localhost:3000/nacionalidad';

  constructor(private http: HttpClient) {}

  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(this.apiUrl);
  }
}
