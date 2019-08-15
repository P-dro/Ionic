import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ListaCarrosComponent } from './lista-carros.component';
import { AcessoriosCarroComponent } from '../acessorios-carro/acessorios-carro.component';




@NgModule({
  declarations: [
    ListaCarrosComponent,
    AcessoriosCarroComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ListaCarrosComponent
  ]
})
export class ListaCarrosModule { }
