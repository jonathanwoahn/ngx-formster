import { BaseFormElementComponent } from './base-form-element/base-form-element.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { Injectable, ElementRef, Injector } from '@angular/core';
import {
  NgxFormsterElementConfig,
  NGX_FORMSTER,
  NgxFormsterComponentProvider,
} from './ngx-formster-models';

@Injectable({
  providedIn: 'root'
})
export class NgxFormsterComponentFactoryService {
  private providers: NgxFormsterComponentProvider[];

  constructor(private injector: Injector) {
    this.providers = this.injector.get(NGX_FORMSTER);
   }

  getFormsterComponent(config: NgxFormsterElementConfig) {
    const provider = this.getProvider(config);
    if (!provider) {
      throw new Error(`No provider capable of handling ${config.type}`);
    }
    return provider.getComponent(config.type);
  }

  private getProvider(config: NgxFormsterElementConfig): NgxFormsterComponentProvider {
    return this.providers.find((provider: NgxFormsterComponentProvider) => provider.canProvide(config.type));
  }
}
