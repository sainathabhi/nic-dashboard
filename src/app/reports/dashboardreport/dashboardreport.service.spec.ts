import { TestBed } from '@angular/core/testing';

import { DashboardreportService } from './dashboardreport.service';

describe('DashboardreportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardreportService = TestBed.get(DashboardreportService);
    expect(service).toBeTruthy();
  });
});
