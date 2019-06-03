import { InjectionToken } from '@angular/core';
import { ValidatorFn, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export const NGX_FORMSTER = new InjectionToken <NgxFormsterComponentProvider[]>('NGX_FORMSTER');
export type NgxFormsterTypes = 'formGroup' | 'formArray' | 'input' | 'switch'
  | 'select' | 'range' | 'radio' | 'checkbox' | 'textarea' | 'autocomplete';
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
  /**
   * Function that allows for logic to determine when / if the field should be displayed
   */
  hidden?: (formGroup: FormGroup, config: NgxFormsterElementBase) => boolean;
}

export interface NgxFormsterFormGroupConfig extends NgxFormsterElementBase {
  type: 'formGroup';
  fields: NgxFormsterElementConfig[];
  options?: {
    label?: string;
    class?: string;
  };
}

export interface NgxFormsterFormArrayConfig extends NgxFormsterElementBase {
  type: 'formArray';
  fields: NgxFormsterElementConfig[];
  value?: object[];
  options?: {
    label?: string;
    class?: string;
  };
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

export interface NgxFormsterFormTextareaConfig extends NgxFormsterElementBase {
  type: 'textarea';
  options?: {
    label?: string;
    placeholder?: string;
  };
}

export interface NgxFormsterFormSwitchConfig extends NgxFormsterElementBase {
  type: 'switch';
  options?: {
    leftLabel?: string;
    rightLabel?: string;
  };
}

export interface NgxFormsterFormCheckboxConfig extends NgxFormsterElementBase {
  type: 'checkbox';
  options?: {
    label: string;
  };
}

export interface NgxFormsterFormSelectConfig extends NgxFormsterElementBase {
  type: 'select';
  options: {
    label?: string;
    defaultLabel?: string;
    options: any[];
    valueProp: string;
    labelProp: string;
    multiple?: boolean;
  };
}

export interface NgxFormsterFormAutocompleteConfig extends NgxFormsterElementBase {
  type: 'autocomplete';
  options?: {
    label?: string;
    prefixIcon?: string;
    /**
     * Limit on number of autocomplete results to display
     */
    limit?: number;
    /**
     * Minimum length of text before autocomplete
     */
    minLength?: number;
    options$: Observable<any[]>;
  };
}

export type NgxFormsterElementConfig =
  | NgxFormsterFormGroupConfig
  | NgxFormsterFormArrayConfig
  | NgxFormsterFormInputConfig
  | NgxFormsterFormSwitchConfig
  | NgxFormsterFormCheckboxConfig
  | NgxFormsterFormSelectConfig
  | NgxFormsterFormTextareaConfig
  | NgxFormsterFormAutocompleteConfig
;
