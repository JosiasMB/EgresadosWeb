import { Component, OnInit } from '@angular/core';
import { Provincia } from '../../Models/provincias.model';
import { ProvinciaListService } from '../../Services/lista-provincias.services';

@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.component.html',
  styleUrls: ['./provincias.component.css'],
})
export class ProvinciasComponent implements OnInit {
  provincias: Provincia[] = [];
  constructor(private provinciaListService: ProvinciaListService) {}
  ngOnInit(): void {
    this.provinciaListService.getProvincias().subscribe(
      (data) => {
        this.provincias = data;
      },
      (error) => {
        console.error('Error fetching skills:', error);
      }
    );
  }
}
