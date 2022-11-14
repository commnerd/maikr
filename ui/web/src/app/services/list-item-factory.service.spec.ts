import { TestBed } from '@angular/core/testing';

import { ListItemFactoryService } from './list-item-factory.service';

describe('ListItemFactoryService', () => {
  let service: ListItemFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListItemFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
