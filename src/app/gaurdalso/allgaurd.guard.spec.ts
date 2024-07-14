import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { allgaurdGuard } from './allgaurd.guard';

describe('allgaurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => allgaurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
