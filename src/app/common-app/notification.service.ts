import { Injectable } from '@angular/core';
import { LoggerService } from 'src/mp-core';

export enum NotificationType { error, warn, info, log }

export class Notification {
  constructor(private id: number, private msg: string, private type: NotificationType) {}
  public get Id() { return this.id; }
  public set Id(valor: number) { this.id = valor; }
  public get Message() { return this.msg; }
  public set Message(valor: string) { this.msg = valor; }
  public get Type() { return this.type; }
  public set Type(valor: NotificationType) { this.type = valor; }
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private listado: Array<Notification> = [];

  constructor(private out: LoggerService) { }

  public get Listado() { return Object.assign([], this.listado); }
  public get HayNotificaciones(): boolean { return this.listado.length > 0; }

  public add(msg: string, type = NotificationType.error) {
    if (!msg) {
      this.out.error('Falta el mensaje');
      return;
    }
    const id = this.HayNotificaciones ? this.listado[this.listado.length - 1].Id + 1 : 1;
    this.listado.push(new Notification(id, msg, type));
    if (type === NotificationType.error) {
      this.out.error(`NOTIFICACION: ${msg}`);
    }
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
