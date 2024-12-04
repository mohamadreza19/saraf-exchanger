import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMutateComponent } from './bank-mutate.component';

describe('BankMutateComponent', () => {
  let component: BankMutateComponent;
  let fixture: ComponentFixture<BankMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankMutateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
