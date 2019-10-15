import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [
    HomeComponent, DemosComponent, CalculadoraComponent,
  ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'demos', componente: DemosComponent, active: false},
    { texto: 'inicio', componente: HomeComponent, active: false},
    { texto: 'calculadora', componente: CalculadoraComponent, active: false},
  ];
  seleccionado = this.menu[0].componente;

  constructor() {
    this.menu[0].active = true;
  }

  seleccionar(indice: number) {
    this.seleccionado = this.menu[indice].componente;
    this.menu.forEach((item, index) => (item.active = index === indice));
  }
  ngOnInit() {
  }

}
