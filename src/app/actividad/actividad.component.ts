
import { Component, OnInit } from '@angular/core';
import { ActividadDTO } from '../model/actividad';
import { EmpleadoDTO } from '../model/empleado';
import { Service } from "../service/service";

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadListComponent implements OnInit {

  constructor(
    public restApi: Service,
    ) { }

  Actividades: any = [];
  Empleados: any = [];
  Estados: any = [{"id": 1, "valor": "Realizado"}, {"id": 2, "valor": "Pendiente"}];
  habilitarEditar: boolean = false;
  ActividEditar: any = [];
  ngOnInit() {
    this.loadActividades();
    this.loadEmpleados();
  }

  loadActividades() {
    return this.restApi.getActividades().subscribe((data: {}) => {
      this.Actividades = data;
    });
  }

  loadEmpleados() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.Empleados = data;
    });
  }

  agregarActividad(idActividad :number, estado: number, fechaEjecucion: string, idEmpleado: number) {
    const actividad = new ActividadDTO();
    actividad.idActividad = idActividad;
    actividad.estado = Number(estado);
    actividad.fechaCierre = actividad.estado == 1 ? fechaEjecucion : null;
    actividad.fechaEjecucion = fechaEjecucion;
    const empleado = new EmpleadoDTO();
    empleado.idEmpleado = Number(idEmpleado);
    actividad.idEmpleado = empleado;
    this.habilitarEditar = false;

    var mensaje = idActividad == 0 ? "Esta seguro de crear esta actividad" : "Esta seguro de modificar esta actividad";
    if (window.confirm(mensaje)){
      this.restApi.crearActividad(actividad).subscribe((result) => {
        console.log("result crear actividad", result)
        this.loadActividades()
      }, (err) => {
        if (err.status == 200) {
          console.log("result crear actividad", err)
        } else {
          console.log("result crear actividad", err)
        }
      });
    }
  }  

  eliminarActividad(idActividad: number) {

    if (window.confirm('Esta seguro de eliminar esta actividad')){
      this.restApi.eliminarActividad(idActividad).subscribe((result) => {
        console.log("result eliminar actividad", result)
        this.loadActividades()
      }, (err) => {
        if (err.status == 200) {
          console.log("result eliminar actividad", err)
        } else {
          console.log("result eliminar actividad", err)
        }
      });
    }
    this.habilitarEditar = false;
  }  

  editarActividad(element: any): void {
    this.habilitarEditar = true;
    this.ActividEditar = [];
    this.ActividEditar = element;
  }
}
