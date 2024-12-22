import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTreasuryMutateComponent } from './cash-treasury-mutate.component';

describe('CashTreasuryMutateComponent', () => {
  let component: CashTreasuryMutateComponent;
  let fixture: ComponentFixture<CashTreasuryMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashTreasuryMutateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashTreasuryMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
