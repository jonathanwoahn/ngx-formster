import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { NgxFormsterElementConfig } from '../ngx-formster-models';
import { v4 as uuid } from 'uuid';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'lib-base-form-element',
  templateUrl: './base-form-element.component.html',
})
export class BaseFormElementComponent implements OnDestroy {
  @Input() config: NgxFormsterElementConfig;
  @Input() formGroup: FormGroup;

  id = uuid();

  private unsubscribe$: Subject<void> = new Subject();
  constructor() { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  get options() {
    return (this.config || {} as any).options ? (this.config || {} as any).options : {};
  }
}
