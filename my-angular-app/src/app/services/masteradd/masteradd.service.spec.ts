import { TestBed } from '@angular/core/testing';
import { MasteraddsService } from './masteradd.service';
describe('MasteraddsService', () => {
  let service: MasteraddsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasteraddsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
