import { NgxFormsterFormGroupConfig } from '../ngx-formster-models';
import { BaseFormElementComponent } from './../base-form-element/base-form-element.component';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-form-group',
  template: `
    <div [ngClass]="options.class">
      <span [innerHtml]="options.label" *ngIf="options.label"></span>
      <ngx-formster
        [config]="config.fields"
        [formGroup]="formGroup?.controls[config.key]">
      </ngx-formster>
    </div>
  `,
})
export class FormGroupComponent extends BaseFormElementComponent {
  config: NgxFormsterFormGroupConfig;
}
