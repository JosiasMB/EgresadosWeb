import { Component, OnInit } from '@angular/core';
import { Habilidad } from '../../Models/habilidades.model';
import { HabilidadListService } from '../../Services/lista-habilidadades.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  habilidades: Habilidad[] = [];
  constructor(private habilidadListService: HabilidadListService) {}
  ngOnInit(): void {
    this.habilidadListService.getHabilidades().subscribe(
      (data) => {
        this.habilidades = data;
      },
      (error) => {
        console.error('Error fetching skills:', error);
      }
    );
  }
}
