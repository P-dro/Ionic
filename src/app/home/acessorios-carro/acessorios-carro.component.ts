import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acessorios-carro',
  templateUrl: './acessorios-carro.component.html',
  styleUrls: ['./acessorios-carro.component.css']
})
export class AcessoriosCarroComponent {

  constructor() { }

  public acessorios = [
    { acessorio: 'Freio ABS - R$500.00' },
    { acessorio: 'Ar Cond. - R$1.000.00' },
    { acessorio: 'MP3 - R$800.00' }
  ];
}
