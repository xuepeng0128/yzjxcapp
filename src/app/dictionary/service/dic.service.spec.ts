import { TestBed } from '@angular/core/testing';

import { DicService } from './dic.service';

describe('DicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DicService = TestBed.get(DicService);
    expect(service).toBeTruthy();
  });
});
