import { EmpleadoDTO } from './empleado';

export class ActividadDTO {

  idActividad: number;
  estado: number;
  fechaEjecucion: string;
  fechaCierre: string;
  idEmpleado: EmpleadoDTO;

}