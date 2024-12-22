import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTreasuryComponent } from './cash-treasury.component';

describe('CashTreasuryComponent', () => {
  let component: CashTreasuryComponent;
  let fixture: ComponentFixture<CashTreasuryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashTreasuryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashTreasuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
