import { Component, OnInit } from '@angular/core';
import { Egresado } from 'src/app/Models/egresado.model';
import { ExperienciaLaboral } from 'src/app/Models/experiencia.model';
import { EgresadoListService } from 'src/app/Services/lista-egresados.service';

@Component({
  selector: 'app-targetas-usuarios',
  templateUrl: './targetas-usuarios.component.html',
  styleUrls: ['./targetas-usuarios.component.css'],
})
export class TargetasUsuariosComponent implements OnInit {
  egresados: Egresado[] = [];
  experiencia: ExperienciaLaboral[] = [];

  constructor(private egresadoListService: EgresadoListService) {}
  ngOnInit(): void {
    this.egresadoListService.getEgresados().subscribe(
      (data) => {
        this.egresados = data;
      },

      (error) => {
        console.error('Error fetching skills:', error);
      }
    );
  }
  obtenerUltimaPosicion(egresado: Egresado) {
    const { experienciaLaboralEgresado } = egresado;
    const ultimaPosicion = experienciaLaboralEgresado.filter(
      (experiencia) => !experiencia.FechaSal
    )[0];
    return ultimaPosicion ? ultimaPosicion.posicion : 'No tiene experiencia';
  }

  obtenerUltimaEmpresa(egresado: Egresado) {
    const { experienciaLaboralEgresado } = egresado;
    const ultimaEmpresa = experienciaLaboralEgresado.filter(
      (empresa) => !empresa.empresa
    )[0];
    return ultimaEmpresa ? ultimaEmpresa.empresa : 'N/A';
  }
}
