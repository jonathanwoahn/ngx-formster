import { InjectionToken } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';

export const NGX_FORMSTER = new InjectionToken <NgxFormsterComponentProvider[]>('NGX_FORMSTER');
export type NgxFormsterTypes = 'formGroup' | 'formArray' | 'input' | 'switch' | 'select' | 'range' | 'radio' | 'checkbox';
export class NgxFormsterComponentProvider {
  protected library: ComponentLibrary[] = [];

  canProvide(type: NgxFormsterTypes): boolean {
      const result = this.getComponent(type);
      return !!result;
  }

  getComponent(type: NgxFormsterTypes): any {
    const result = this.library.find(element => element.type === type);
    if (!result) {
      return undefined;
    }
    return result.component;
  }
}


export interface ComponentLibrary {
  type: NgxFormsterTypes;
  component: any;
}

export interface NgxFormsterElementBase {
  type: NgxFormsterTypes;
  key: string;
  validation?: ValidatorFn[];
  value?: any;
}

export interface NgxFormsterFormGroupConfig extends NgxFormsterElementBase {
  type: 'formGroup';
  fields: NgxFormsterElementConfig[];
}

export interface NgxFormsterFormArrayConfig extends NgxFormsterElementBase {
  type: 'formArray';
  fields: NgxFormsterElementConfig[];
}

export interface NgxFormsterFormInputConfig extends NgxFormsterElementBase {
  type: 'input';
  options?: {
    type?: 'text' | 'number' | 'email' | 'password';
    label?: string;
    placeholder?: string;
    prefixIcon?: string;
    leftHelperText?: string;
  };
}

export interface NgxFormsterFormSwitchConfig extends NgxFormsterElementBase {
  type: 'switch';
  options?: {
    leftLabel?: string;
    rightLabel?: string;
  };
}

export type NgxFormsterElementConfig =
  | NgxFormsterFormGroupConfig
  | NgxFormsterFormArrayConfig
  | NgxFormsterFormInputConfig
  | NgxFormsterFormSwitchConfig
;
