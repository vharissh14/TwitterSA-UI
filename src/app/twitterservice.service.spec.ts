import { TestBed, inject } from '@angular/core/testing';

import { TwitterserviceService } from './twitterservice.service';

describe('TwitterserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitterserviceService]
    });
  });

  it('should ...', inject([TwitterserviceService], (service: TwitterserviceService) => {
    expect(service).toBeTruthy();
  }));
});
