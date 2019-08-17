import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-acessorios-carro',
  templateUrl: './acessorios-carro.component.html',
  styleUrls: ['./acessorios-carro.component.css']
})
export class AcessoriosCarroComponent implements OnInit {

  public carro: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.carro = params.get('carro');
      console.log(this.carro);

    });
  }

  public acessorios = [
    { acessorio: 'Freio ABS', preco: 'R$500.00' },
    { acessorio: 'Ar Cond.', preco: 'R$1.000.00' },
    { acessorio: 'MP3', preco: 'R$800.00' }
  ];
}
