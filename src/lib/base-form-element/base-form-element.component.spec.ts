import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormElementComponent } from './base-form-element.component';

describe('BaseFormElementComponent', () => {
  let component: BaseFormElementComponent;
  let fixture: ComponentFixture<BaseFormElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFormElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
