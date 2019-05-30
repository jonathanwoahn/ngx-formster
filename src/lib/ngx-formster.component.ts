import { BehaviorSubject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { NgxFormsterElementConfig } from './ngx-formster-models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-formster',
  template: `
    <ng-template
      ngxFormster
      *ngFor="let item of config$ | async"
      [formGroup]="formGroup"
      [config]="item">
    </ng-template>
    <ng-content></ng-content>
  `,
  styles: []
})
export class NgxFormsterComponent implements OnInit {
  @Input() set config(value: NgxFormsterElementConfig[]) { this.config$.next(value); }
  @Input() formGroup: FormGroup = new FormGroup({});

  config$: BehaviorSubject<NgxFormsterElementConfig[]> = new BehaviorSubject([]);
  constructor() { }

  ngOnInit() {
    // console.log(this.formGroup);
    // this.config$.subscribe(res => console.log(res));
  }

}
