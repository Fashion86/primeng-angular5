import { TestBed, inject } from '@angular/core/testing';

import { RegisterDataService } from './register-data.service';

describe('RegisterDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterDataService]
    });
  });

  it('should be created', inject([RegisterDataService], (service: RegisterDataService) => {
    expect(service).toBeTruthy();
  }));
});
