import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './components/cards/cards.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CarouselComponent } from './components/carousel/carousel.component';




@NgModule({
  declarations: [
    InicioComponent,
    CardsComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[
    InicioComponent
  ]
})
export class InicioModule { }
