// import { expect } from 'chai';
import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';

describe('DbService', () => {
  let service: DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should items in getTools', () => {
    expect(service.getTools().length).not.toBe(0);
  });
});
