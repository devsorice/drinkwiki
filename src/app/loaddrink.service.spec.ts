import { TestBed } from '@angular/core/testing';

import { LoaddrinkService } from './loaddrink.service';

describe('LoaddrinkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaddrinkService = TestBed.get(LoaddrinkService);
    expect(service).toBeTruthy();
  });
});
