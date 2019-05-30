import { TestBed } from '@angular/core/testing';

import { NgxFormsterService } from './ngx-formster.service';

describe('NgxFormsterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFormsterService = TestBed.get(NgxFormsterService);
    expect(service).toBeTruthy();
  });
});
