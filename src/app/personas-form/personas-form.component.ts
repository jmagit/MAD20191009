import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { RESTDAOService } from '../base-code/dao';
import { HttpClient } from '@angular/common/http';
import { NotificationService, NotificationType } from '../common-app/notification.service';
import { send } from 'q';

@Injectable({ providedIn: 'root' })
export class PersonasDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'personas');
  }
}

@Component({
  selector: 'app-personas-form',
  templateUrl: './personas-form.component.html',
  styleUrls: ['./personas-form.component.css']
})
export class PersonasFormComponent implements OnInit {
  VM = {
    Elemento: { id: 0 }
    //    Elemento: { id: 2, nombre: 'Pepitoooooooooooooooooo', apellidos: 'Grillo', edad: 101 }
  }

  constructor(private dao: PersonasDAOService,
    private notify: NotificationService) { }

  ngOnInit() {
    // this.dao.get(4).subscribe(
    //   data => this.VM.Elemento = data,
    //   err => this.notify.add(err.message)
    // );
  }
  send() {
    this.dao.add(this.VM.Elemento).subscribe(
      data => this.notify.add("OK", NotificationType.info),
      err => this.notify.add(err.message)
    );
    // this.dao.change(this.VM.Elemento.id, this.VM.Elemento).subscribe(
    //   data => this.notify.add("OK", NotificationType.info),
    //   err => this.notify.add(err.message)
    // );
  }

}
