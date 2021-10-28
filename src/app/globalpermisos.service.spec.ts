import { TestBed } from '@angular/core/testing';

import { GlobalpermisosService } from './globalpermisos.service';

describe('GlobalpermisosService', () => {
  let service: GlobalpermisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalpermisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
