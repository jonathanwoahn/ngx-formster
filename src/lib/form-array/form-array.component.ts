import { FormArray, FormGroup } from '@angular/forms';
import { NgxFormsterFormArrayConfig } from './../../../../../dist/ngx-formster/lib/ngx-formster-models.d';
import { Component, OnInit } from '@angular/core';
import { BaseFormElementComponent } from '../base-form-element/base-form-element.component';

@Component({
  selector: 'lib-form-array',
  templateUrl: './form-array.component.html',
})
export class FormArrayComponent extends BaseFormElementComponent {
  config: NgxFormsterFormArrayConfig;

  constructor() {
    super();
  }

  addField(): void {
    (this.formGroup.controls[this.config.key] as FormArray).push(new FormGroup({}));
  }

  removeField(index: number): void {
    (this.formGroup.controls[this.config.key] as FormArray).removeAt(index);
  }

  get formArray(): FormGroup[] {
    return (this.formGroup.controls[this.config.key] as any).controls;
  }
}
