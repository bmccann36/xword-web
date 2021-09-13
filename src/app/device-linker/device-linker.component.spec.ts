import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLinkerComponent } from './device-linker.component';

describe('DeviceLinkerComponent', () => {
  let component: DeviceLinkerComponent;
  let fixture: ComponentFixture<DeviceLinkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceLinkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
