export interface Egresado {
  id: number;
  Nombre: string;
  Nivel: string;
  ApellidoMaterno: string;
  ApellidoPaterno: string;
  Cedula: string;
  Pasaporte: string;
  FechaNac: string;
  Genero: string;
  profilePicUrl: string;
  about: string;
  destacado: Boolean;
  experienciaLaboralEgresado: ExperienciaLaboralEgresado[];
}

export interface ExperienciaLaboralEgresado {
  egresadoId: number;
  posicion: string;
  empresa: string;
  salario: number;
  FechaEntr: string;
  FechaSal: string;
}
