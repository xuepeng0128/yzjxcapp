import { TestBed } from '@angular/core/testing';

import { PayKindService } from './pay-kind.service';

describe('PayKindService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayKindService = TestBed.get(PayKindService);
    expect(service).toBeTruthy();
  });
});
