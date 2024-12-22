import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCheckbookComponent } from './bank-checkbook.component';

describe('BankCheckbookComponent', () => {
  let component: BankCheckbookComponent;
  let fixture: ComponentFixture<BankCheckbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankCheckbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankCheckbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
