import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { NgxFormsterElementConfig } from '../ngx-formster-models';
import { v4 as uuid } from 'uuid';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'lib-base-form-element',
  templateUrl: './base-form-element.component.html',
})
export class BaseFormElementComponent {
  @Input() config: NgxFormsterElementConfig;
  @Input() formGroup: FormGroup;

  id = uuid();

  constructor() { }

  get options() {
    return (this.config || {} as any).options ? (this.config || {} as any).options : {};
  }
}
