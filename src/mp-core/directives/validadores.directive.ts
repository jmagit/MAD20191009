import { Directive, forwardRef, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[uppercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UpperCaseValidator, multi: true }]
})
export class UpperCaseValidator implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    const valor = control.value;
    if (valor) {
      return valor !== valor.toUpperCase() ? { 'uppercase': `${valor} debe estar en mayusculas` } : null;
    } else {
      return null;
    }
  }
}

export const MIN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};

@Directive({
  selector: '[min][formControlName],[min][formControl],[min][ngModel]',
  providers: [MIN_VALIDATOR],
  host: { '[attr.min]': 'min ? min : null' }
})
export class MinValidator implements Validator,
  OnChanges {
  // TODO(issue/24571): remove '!'.
  private _validator !: ValidatorFn;
  // TODO(issue/24571): remove '!'.
  private _onChange !: () => void;

  /**
   * @description
   * Tracks changes to the the minimum length bound to this directive.
   */
  // TODO(issue/24571): remove '!'.
  @Input() min !: string;

  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use
   * only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if ('min' in changes) {
      this._createValidator();
      if (this._onChange) { this._onChange(); }
    }
  }

  /**
   * @description
   * Method that validates whether the value meets a minimum length
   * requirement. Returns the validation result if enabled, otherwise null.
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return this.min == null ? null : this._validator(control);
  }

  /**
   * @description
   * Registers a callback function to call when the validator inputs change.
   *
   * @param fn The callback function
   */
  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.min(parseInt(this.min, 10));
  }
}

export const MAX_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};

@Directive({
  selector: '[max][formControlName],[max][formControl],[max][ngModel]',
  providers: [MAX_VALIDATOR],
  host: { '[attr.max]': 'max ? max : null' }
})
export class MaxValidator implements Validator,
  OnChanges {
  // TODO(issue/24571): remove '!'.
  private _validator !: ValidatorFn;
  // TODO(issue/24571): remove '!'.
  private _onChange !: () => void;

  /**
   * @description
   * Tracks changes to the the maximum length bound to this directive.
   */
  // TODO(issue/24571): remove '!'.
  @Input() max !: string;

  /**
   * @description
   * A lifecycle method called when the directive's inputs change. For internal use
   * only.
   *
   * @param changes A object of key/value pairs for the set of changed inputs.
   */
  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes) {
      this._createValidator();
      if (this._onChange) { this._onChange(); }
    }
  }

  /**
   * @description
   * Method that validates whether the value meets a maximum length
   * requirement. Returns the validation result if enabled, otherwise null.
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return this.max == null ? null : this._validator(control);
  }

  /**
   * @description
   * Registers a callback function to call when the validator inputs change.
   *
   * @param fn The callback function
   */
  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.max(parseInt(this.max, 10));
  }
}

export const MIS_VALIDADORES = [UpperCaseValidator, MinValidator, MaxValidator ];
