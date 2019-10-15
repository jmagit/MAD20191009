import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { DemosComponent } from '../demos/demos.component';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.css'],
  entryComponents: [
    HomeComponent, DemosComponent,
  ]
})
export class DinamicoComponent implements OnInit {
  menu = [
    { texto: 'inicio', componente: HomeComponent, active: true},
    { texto: 'demos', componente: DemosComponent, active: false},
  ];
  seleccionado = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number) {
    this.seleccionado = this.menu[indice].componente;
    this.menu.forEach((item, index) => (item.active = index === indice));
  }
  ngOnInit() {
  }

}
