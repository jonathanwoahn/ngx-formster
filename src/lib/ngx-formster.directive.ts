import { NgxFormsterComponentFactoryService } from './ngx-formster-component-factory.service';
import { Directive, Input, OnInit, ElementRef, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { NgxFormsterElementConfig } from './ngx-formster-models';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BaseFormElementComponent } from './base-form-element/base-form-element.component';

@Directive({ selector: '[ngxFormster]' })
export class NgxFormsterDirective implements OnInit {
  @Input() config: NgxFormsterElementConfig;
  @Input() formGroup: FormGroup;

  private componentRef: ComponentRef<any>;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private comonentFactoryResolver: ComponentFactoryResolver,
    private ngxComponentFactory: NgxFormsterComponentFactoryService,
  ) { }

  ngOnInit(): void {
    this.viewContainerRef.clear();
    const component = this.ngxComponentFactory.getFormsterComponent(this.config);
    const componentFactory = this.comonentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);
    (this.componentRef.instance as BaseFormElementComponent).config = this.config;

    const control = this.getControl(this.config);
    this.formGroup.addControl(this.config.key, control);
    (this.componentRef.instance as BaseFormElementComponent).formGroup = this.formGroup;
  }

  private getControl(config: NgxFormsterElementConfig) {
    switch (config.type) {
      case ('formGroup'):
        return new FormGroup({});
      case ('formArray'):
        return new FormArray([]);
      default:
        return new FormControl(config.value, config.validation);
    }
  }
}
