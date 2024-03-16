import { TestBed } from '@angular/core/testing';

import { Open5Service } from './open5.service';

describe('Open5Service', () => {
  let service: Open5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Open5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
