import { NgxFormsterFormGroupConfig } from '../ngx-formster-models';
import { BaseFormElementComponent } from './../base-form-element/base-form-element.component';
import { Component, OnInit, Input } from '@angular/core';
import { NgxFormsterElementConfig } from '../ngx-formster-models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-form-group',
  template: `
    <ngx-formster
      [config]="config.fields"
      [formGroup]="formGroup?.controls[config.key]">
    </ngx-formster>
  `,
})
export class FormGroupComponent extends BaseFormElementComponent {
  config: NgxFormsterFormGroupConfig;
}
