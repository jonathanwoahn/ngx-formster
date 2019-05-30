import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormsterComponent } from './ngx-formster.component';

describe('NgxFormsterComponent', () => {
  let component: NgxFormsterComponent;
  let fixture: ComponentFixture<NgxFormsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFormsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFormsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
