import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PIPES_CADENAS } from './pipes/cadenas.pipe';



@NgModule({
  declarations: [
    PIPES_CADENAS,
  ],
  exports: [
    PIPES_CADENAS,
  ],
  imports: [
    CommonModule
  ]
})
export class MpCoreModule { }
