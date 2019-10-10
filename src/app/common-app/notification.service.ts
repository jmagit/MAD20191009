import { Injectable } from '@angular/core';
import { LoggerService } from 'src/mp-core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<string> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }
  public get HayNotificaciones(): boolean { return this.listado.length > 0; }

  public add(msg: string): void {
    if (!msg) {
      this.out.error('Falta el mensaje de notificacion');
      return;
    }
    this.listado.push(msg);
    this.out.warn(`NOTIFICACION: ${msg}`);
  }
  public delete(index: number) {
    if (0 <= index && index < this.listado.length) {
      this.listado.splice(index, 1);
    } else {
      this.out.error('Index out of range');
    }
  }
  public clear() {
    if (this.HayNotificaciones) {
      this.listado.splice(0);
    }
  }
}
