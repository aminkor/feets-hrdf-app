import { TestBed } from '@angular/core/testing';

import { HrdfServerProviderService } from './hrdf-server-provider.service';

describe('HrdfServerProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HrdfServerProviderService = TestBed.get(HrdfServerProviderService);
    expect(service).toBeTruthy();
  });
});
