import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';
import { ResgistrarseComponent } from './pages/resgistrarse/resgistrarse.component';

//componentes de angular material
import { MatSelectModule, matSelectAnimations } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    IniciarSesionComponent,
    ResgistrarseComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule

  ],
  exports:[
    IniciarSesionComponent,
    ResgistrarseComponent,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule
  ]
})
export class AutentificacionModule { }
