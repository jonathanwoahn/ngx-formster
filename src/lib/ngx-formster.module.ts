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

const COMPONENTS = [
  FormArrayComponent,
  FormGroupComponent,
  BaseFormElementComponent,
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
  ],
  exports: [
    NgxFormsterComponent,
    NgxFormsterErrorMessageComponent,
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
