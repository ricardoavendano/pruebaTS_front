
import { Component, Input, OnInit } from '@angular/core';
import { EmpleadoDTO } from '../model/empleado';
import { Service } from "../service/service";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoListComponent implements OnInit {

  constructor(
    public restApi: Service
    ) { }

  Empleados: any = [];
  ngOnInit() {
    this.loadEmpleados();
  }
  loadEmpleados() {
    return this.restApi.getEmpleados().subscribe((data: {}) => {
      this.Empleados = data;
    });
  }

  agregarEmpleado(nombre: string) {
    const empleado = new EmpleadoDTO();
    empleado.idEmpleado = 0;
    empleado.nombre = nombre;

    if (window.confirm('Esta seguro de crear este empleado')){
      this.restApi.crearEmpleado(empleado).subscribe((result) => {
        console.log("result crear empleado", result)
        this.loadEmpleados()
      }, (err) => {
        if (err.status == 200) {
          console.log("result crear empleado", err)
        } else {
          console.log("result crear empleado", err)
        }
      });
    }
  }
}
