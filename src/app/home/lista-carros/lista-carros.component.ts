import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent {

  constructor() { }

  public carros = [
    { modelo: 'BMW 120i' },
    { modelo: 'Ford Onix 1.6' },
    { modelo: 'Fiesta 2.0' },
    { modelo: 'C3 1.0' },
    { modelo: 'Uno Fire' },
    { modelo: 'Sentra 2.0' },
    { modelo: 'Astra Sedan' },
    { modelo: 'Vectra 2.0 Turbo' },
    { modelo: 'Hilux 4x4' },
    { modelo: 'Montana Cabine Dupla' },
    { modelo: 'Outlander 2.4' },
    { modelo: 'Fusca 1500' }
  ];

}
