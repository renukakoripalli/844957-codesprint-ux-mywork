import { TestBed } from '@angular/core/testing';

import { OrderpageService } from './orderpage.service';

describe('OrderpageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderpageService = TestBed.get(OrderpageService);
    expect(service).toBeTruthy();
  });
});
