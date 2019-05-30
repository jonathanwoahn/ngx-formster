import { TestBed } from '@angular/core/testing';

import { NgxFormsterComponentFactoryService } from './ngx-formster-component-factory.service';

describe('NgxFormsterComponentFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormsterComponentFactoryService = TestBed.get(NgxFormsterComponentFactoryService);
    expect(service).toBeTruthy();
  });
});
