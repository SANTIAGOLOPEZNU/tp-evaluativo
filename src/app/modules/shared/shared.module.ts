import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

//componentes de angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule, matMenuAnimations} from '@angular/material/menu';

//importamos para acceder a las rutas
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class SharedModule { }
