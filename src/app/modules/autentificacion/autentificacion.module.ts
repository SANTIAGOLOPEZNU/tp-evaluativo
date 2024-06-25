import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { ResgistrarseComponent } from './pages/resgistrarse/resgistrarse.component';


@NgModule({
  declarations: [
    IniciarSesionComponent,
    ResgistrarseComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ],
  exports:[
    IniciarSesionComponent,
    ResgistrarseComponent
  ]
})
export class AutentificacionModule { }
