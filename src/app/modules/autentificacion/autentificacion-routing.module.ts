import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResgistrarseComponent } from './pages/resgistrarse/resgistrarse.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {
    path:"registrarse",component:ResgistrarseComponent,
  },
  {
    path:"iniciar-sesion",component:IniciarSesionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
