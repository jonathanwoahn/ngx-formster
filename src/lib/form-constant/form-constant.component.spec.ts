import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConstantComponent } from './form-constant.component';

describe('FormConstantComponent', () => {
  let component: FormConstantComponent;
  let fixture: ComponentFixture<FormConstantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormConstantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormConstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
