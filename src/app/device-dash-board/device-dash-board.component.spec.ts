import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDashBoardComponent } from './device-dash-board.component';

describe('DeviceDashBoardComponent', () => {
  let component: DeviceDashBoardComponent;
  let fixture: ComponentFixture<DeviceDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
