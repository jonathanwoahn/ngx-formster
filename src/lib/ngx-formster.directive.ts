import { takeUntil } from 'rxjs/operators';
import { NgxFormsterComponentFactoryService } from './ngx-formster-component-factory.service';
import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, OnDestroy } from '@angular/core';
import { NgxFormsterElementConfig } from './ngx-formster-models';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { BaseFormElementComponent } from './base-form-element/base-form-element.component';
import { Subject } from 'rxjs';

@Directive({ selector: '[ngxFormster]' })
export class NgxFormsterDirective implements OnInit, OnDestroy {
  @Input() config: NgxFormsterElementConfig;
  @Input() formGroup: FormGroup;

  private componentRef: ComponentRef<any>;
  private unsubscribe$: Subject<void> = new Subject();
  private hide = false;
  constructor(
    private viewContainerRef: ViewContainerRef,
    private comonentFactoryResolver: ComponentFactoryResolver,
    private ngxComponentFactory: NgxFormsterComponentFactoryService,
  ) { }

  ngOnInit(): void {
    const control = this.getControl(this.config);
    this.formGroup.addControl(this.config.key, control);

    if (!!this.config.hidden && typeof this.config.hidden === 'function') {
      this.formGroup.valueChanges
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(() => {
          const hide = this.config.hidden(this.formGroup, this.config);
          if (hide === this.hide) { return; }
          this.hide = hide;
          if (hide) {
            this.viewContainerRef.clear();
            this.formGroup.controls[this.config.key].reset();
          } else {
            this.initComponent();
          }
        });
      return;
    }

    this.initComponent();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  private initComponent(): void {
    this.viewContainerRef.clear();
    const component = this.ngxComponentFactory.getFormsterComponent(this.config);
    const componentFactory = this.comonentFactoryResolver.resolveComponentFactory(component);
    this.componentRef = this.viewContainerRef.createComponent(componentFactory);

    (this.componentRef.instance as BaseFormElementComponent).config = this.config;
    if (this.config.type === 'formGroup') {
      (this.componentRef.instance as BaseFormElementComponent).formGroup = this.formGroup.get(this.config.key) as FormGroup;
    } else {
      (this.componentRef.instance as BaseFormElementComponent).formGroup = this.formGroup;
    }
  }

  private getControl(config: NgxFormsterElementConfig) {
    switch (config.type) {
      case ('formGroup'):
        return new FormGroup({});
      case ('formArray'):
        const array = new FormArray([]);
        const count = (config.value || []).length;
        for (let i = 0; i < count; i += 1) {
          array.push(new FormGroup({}));
        }
        return array;
      default:
        const control = new FormControl(config.value, config.validation);
        if (config.disabled) {
          control.disable();
        }
        return control;
    }
  }
}
