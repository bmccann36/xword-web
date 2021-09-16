import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCodeStepComponent } from './enter-code-step.component';

describe('EnterCodeStepComponent', () => {
  let component: EnterCodeStepComponent;
  let fixture: ComponentFixture<EnterCodeStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterCodeStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCodeStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
