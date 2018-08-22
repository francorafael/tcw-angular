import { TestBed, inject } from '@angular/core/testing';

import { TwcApiServiceModule } from './twc-api.module';
import { TwcApiService } from './twc-api.service';

describe('TwcApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TwcApiServiceModule],
      providers: [TwcApiService]
    });
  });

  it('should be created', inject([TwcApiService], (service: TwcApiService) => {
    expect(service).toBeTruthy();
  }));
});
