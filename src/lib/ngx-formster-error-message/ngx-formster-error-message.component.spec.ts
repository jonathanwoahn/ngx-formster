import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormsterErrorMessageComponent } from './ngx-formster-error-message.component';

describe('NgxFormsterErrorMessageComponent', () => {
  let component: NgxFormsterErrorMessageComponent;
  let fixture: ComponentFixture<NgxFormsterErrorMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormsterErrorMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormsterErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
