import { TestBed, inject } from '@angular/core/testing';

import { TwcApiService } from './twc-api.service';

describe('TwcApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwcApiService]
    });
  });

  it('should be created', inject([TwcApiService], (service: TwcApiService) => {
    expect(service).toBeTruthy();
  }));
});
