import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../common-app/notification.service';
import { LoggerService } from 'src/mp-core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  public Nombre: string = 'mundo';
  public listado = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'barcelona' },
    { id: 3, nombre: 'BILBAO' },
    { id: 4, nombre: 'a Coruña' },
  ];
  public idProvincia = 2;

  public resultado: string = null;
  public visible = true;
  public estetica = { importante: true, error: false, urgente: true };

  constructor(public notify: NotificationService, private out: LoggerService) { }

  saluda() {
    this.resultado = `Hola ${this.Nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.Nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.importante = !this.estetica.importante;
    this.estetica.error = !this.estetica.error;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  add(provincia: string): void {
    if (!provincia || provincia === '') {
      this.out.error('Falta la provincia');
      return;
    }
    const id = this.listado.length === 0 ? 1 : (this.listado[this.listado.length - 1].id + 1);
    this.listado.push({ id, nombre: provincia });
    this.idProvincia = id;
  }

  ngOnInit() {
  }

  // tslint:disable:member-ordering
  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;
  // tslint:enable:member-ordering

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }

}
