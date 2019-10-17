import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonasViewModelService } from './servicios.service';

@Component({
  selector: 'app-personas',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() {
    this.vm.list();
  }
}
@Component({
  selector: 'app-personas-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasListComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
}
@Component({
  selector: 'app-personas-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasAddComponent implements OnInit {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
}
@Component({
  selector: 'app-personas-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasEditComponent implements OnInit, OnDestroy {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
  ngOnDestroy() { }
}
@Component({
  selector: 'app-personas-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.css']
})
export class PersonasViewComponent implements OnInit, OnDestroy {
  constructor(protected vm: PersonasViewModelService) { }
  public get VM() { return this.vm; }
  ngOnInit() { }
  ngOnDestroy() { }
}
export const PERSONAS_COMPONENTES = [
  PersonasComponent, PersonasListComponent, PersonasAddComponent, PersonasEditComponent,
  PersonasViewComponent,
];
