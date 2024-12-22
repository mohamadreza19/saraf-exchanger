import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCheckbookMutateComponent } from './bank-checkbook-mutate.component';

describe('BankCheckbookMutateComponent', () => {
  let component: BankCheckbookMutateComponent;
  let fixture: ComponentFixture<BankCheckbookMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankCheckbookMutateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCheckbookMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
