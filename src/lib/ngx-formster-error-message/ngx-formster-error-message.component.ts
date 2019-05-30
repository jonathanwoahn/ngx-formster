import { takeUntil } from 'rxjs/operators';
import { FormControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'ngx-formster-error-message',
  template: `
    <span>{{error}}</span>
    <ng-content *ngIf="!error"></ng-content>
  `,
})
export class NgxFormsterErrorMessageComponent implements OnInit, OnDestroy {
  @Input() control: FormControl;

  error: string;

  private unsubscribe$ = new Subject();
  constructor() { }

  ngOnInit() {
    this.control.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.error = !this.control.errors ? undefined : this.getErrorMessage(this.control.errors);
      });
  }

  ngOnDestroy(): void { this.unsubscribe$.next(); }

  private getErrorMessage(error: ValidationErrors): string {
    if (error.required) {
      return `This field is required`;
    }
    if (error.minlength) {
      return `Min length ${error.minlength.actualLength} of ${error.minlength.requiredLength} required characters`;
    }
    if (error.maxlength) {
      return `Too long! You've entered ${error.maxlength.actualLength} of a maximum ${error.maxlength.requiredLength} characters`;
    }
    if (error.min) {
      return `Value must be >= ${error.min.min}`;
    }
    if (error.max) {
      return `Value must be <= ${error.max.max}`;
    }
    if (error.email) {
      return `Invalid email format`;
    }
    console.log('no validation for this error yet', error);
    return;
  }
}
