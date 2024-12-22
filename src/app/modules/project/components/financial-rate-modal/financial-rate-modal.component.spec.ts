import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialRateModalComponent } from './financial-rate-modal.component';

describe('FinancialRateModalComponent', () => {
  let component: FinancialRateModalComponent;
  let fixture: ComponentFixture<FinancialRateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialRateModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialRateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
