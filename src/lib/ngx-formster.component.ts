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
  @Input() callback: Function;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSubmit = new EventEmitter();

  config$: BehaviorSubject<NgxFormsterElementConfig[]> = new BehaviorSubject([]);

  clearResults(): void {
    Object.keys(this.formGroup.controls).forEach((key: string) => this.formGroup.removeControl(key));
    this.config$.next([]);
  }

  submit(): void {
    const res = this.processResults();
    this.onSubmit.emit(res);
  }

  processResults(): object {
    const value = this.formGroup.value;
    return this.config$.getValue().reduce((result: object, config: NgxFormsterElementConfig) => {
      if (!config.postProcessing) { return result; }
      result[config.key] = config.postProcessing(this.formGroup, config);
      return result;
    }, value);
  }
}
