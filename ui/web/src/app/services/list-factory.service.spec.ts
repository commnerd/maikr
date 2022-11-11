import { TestBed } from '@angular/core/testing';

import { ListFactoryService } from './list-factory.service';

describe('ListFactoryService', () => {
  let service: ListFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
