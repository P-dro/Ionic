import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }



  public rodapeEnd = 'Avenida Fulana, número 46';
  public dataAtual = new Date();
}
