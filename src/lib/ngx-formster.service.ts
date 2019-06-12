import { FormConstantComponent } from './form-constant/form-constant.component';
import { NgxFormsterComponentProvider, ComponentLibrary } from './ngx-formster-models';
import { Injectable } from '@angular/core';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsterService extends NgxFormsterComponentProvider {
  constructor() {
    super();
    this.library = [
      // {
      //   type: 'formArray',
      //   component: FormArrayComponent,
      // },
      {
        type: 'formGroup',
        component: FormGroupComponent,
      },
      {
        type: 'constant',
        component: FormConstantComponent,
      },
    ];
  }
}
