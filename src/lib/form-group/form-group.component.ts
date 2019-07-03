import { NgxFormsterElementConfig } from './../ngx-formster-models';
import { NgxFormsterFormGroupConfig } from '../ngx-formster-models';
import { BaseFormElementComponent } from './../base-form-element/base-form-element.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-group',
  styles: [`
    :host {
      width: 100%;
    }
  `],
  template: `
    <div [formGroup]="formGroup" [ngClass]="options.class" fxLayout="row" fxLayoutAlign="space-around center">
      <ng-template
        ngxFormster
        *ngFor="let item of config.fields"
        [formGroup]="formGroup"
        [config]="getConfig(item)">
      </ng-template>
    </div>
  `,
})
export class FormGroupComponent extends BaseFormElementComponent {
  config: NgxFormsterFormGroupConfig;

  getConfig(config: NgxFormsterElementConfig): NgxFormsterElementConfig {
    return {
      ...config,
      value: (this.config.value || {} as any)[config.key],
    };
  }
}
