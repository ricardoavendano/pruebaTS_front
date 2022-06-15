import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActividadListComponent } from './actividad/actividad.component';
import { EmpleadoListComponent } from "./empleado/empleado.component";

const routes: Routes = [
  { path: 'empleado-list', component: EmpleadoListComponent },
  { path: 'actividad-list', component: ActividadListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
