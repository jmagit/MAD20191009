import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MpCoreModule } from 'src/mp-core';
import { PersonasComponent, PERSONAS_COMPONENTES } from './componente.component';
import { CommonAppModule } from '../common-app/common-app.module';
import { NotificationService } from '../common-app/notification.service';



@NgModule({
  declarations: [
    PERSONAS_COMPONENTES
  ],
  exports: [
    PersonasComponent, //PERSONAS_COMPONENTES 
  ],
  providers: [NotificationService],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), MpCoreModule, CommonAppModule,
  ]
})
export class PersonasModule { }
