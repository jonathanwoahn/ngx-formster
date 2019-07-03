import { NgxFormsterService } from './ngx-formster.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFormsterComponent } from './ngx-formster.component';
import { NgxFormsterDirective } from './ngx-formster.directive';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { BaseFormElementComponent } from './base-form-element/base-form-element.component';
import { NGX_FORMSTER } from './ngx-formster-models';
import { NgxFormsterComponentFactoryService } from './ngx-formster-component-factory.service';
import { NgxFormsterErrorMessageComponent } from './ngx-formster-error-message/ngx-formster-error-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormConstantComponent } from './form-constant/form-constant.component';
import { FlexModule } from '@angular/flex-layout';

const COMPONENTS = [
  FormArrayComponent,
  FormGroupComponent,
  BaseFormElementComponent,
  FormConstantComponent,
];

@NgModule({
  entryComponents: [
    ...COMPONENTS,
  ],
  declarations: [
    NgxFormsterComponent,
    NgxFormsterDirective,
    NgxFormsterErrorMessageComponent,
    ...COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexModule,
  ],
  exports: [
    NgxFormsterComponent,
    NgxFormsterDirective,
    NgxFormsterErrorMessageComponent,
    FormGroupComponent,
  ],
  providers: [
    NgxFormsterComponentFactoryService,
    {
      provide: NGX_FORMSTER,
      useClass: NgxFormsterService,
      multi: true,
    },
  ],
})
export class NgxFormsterModule { }
