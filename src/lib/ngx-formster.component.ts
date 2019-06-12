import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxFormsterElementConfig } from './ngx-formster-models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-formster',
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="submit()" novalidate>
      <ng-template
        ngxFormster
        *ngFor="let item of config$ | async"
        [formGroup]="formGroup"
        [config]="item">
      </ng-template>
      <ng-content></ng-content>
    </form>
  `,
  styles: []
})
export class NgxFormsterComponent {
  @Input() set config(value: NgxFormsterElementConfig[]) { this.config$.next(value); }
  @Input() formGroup: FormGroup = new FormGroup({});
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter();

  config$: BehaviorSubject<NgxFormsterElementConfig[]> = new BehaviorSubject([]);

  submit(): void {
    const value = this.formGroup.value;
    const res = this.config$.getValue().reduce((result: object, config: NgxFormsterElementConfig) => {
      if (!config.postProcessing) { return result; }
      result[config.key] = config.postProcessing(this.formGroup, config);
      return result;
    }, value);
    this.onSubmit.emit(res);
  }
}
