import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { EmpleadoDTO } from '../model/empleado';
import { ActividadDTO } from '../model/actividad';

@Injectable({
    providedIn: 'root'
  })
  export class Service {

    apiURL = 'http://localhost:8080/prueba';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  

      getEmpleados(): Observable<EmpleadoDTO> {
        return this.http.get<EmpleadoDTO>(this.apiURL + '/listarEmpleado')
        .pipe(
          retry(0)
        )
      }

      crearEmpleado(empleado): Observable<String> {
        return this.http.post<String>(this.apiURL + '/crearEmpleado', JSON.stringify(empleado), this.httpOptions)
        .pipe(
          retry(0)
        )
        
      }

      getActividades(): Observable<ActividadDTO> {
        return this.http.get<ActividadDTO>(this.apiURL + '/listarActividad')
        .pipe(
          retry(0)
        )
      }

      crearActividad(actividad): Observable<String> {
        return this.http.post<String>(this.apiURL + '/crearActividad', JSON.stringify(actividad), this.httpOptions)
        .pipe(
          retry(0)
        )
      }

      eliminarActividad(idActividad: number): Observable<String> {
        return this.http.get<String>(this.apiURL + '/eliminarActividad/'+idActividad)
        .pipe(
          retry(0)
        )
      }

  
}