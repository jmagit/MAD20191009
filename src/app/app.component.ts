import { Component } from '@angular/core';
import { NotificationService } from './common-app/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola mundo';
  // constructor(out: LoggerService) {
  //   out.error('Esto es un error');
  //   out.warn('Esto es un warn');
  //   out.info('Esto es un info');
  //   out.log('Esto es un log');
  // }

  constructor(notify: NotificationService) {
    notify.add('Esto es un notificacion');
    notify.delete(0);
    notify.add(null);
    notify.delete(0);
  }
}
