import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferBetweenAccountsComponent } from './transfer-between-accounts.component';

describe('TransferBetweenAccountsComponent', () => {
  let component: TransferBetweenAccountsComponent;
  let fixture: ComponentFixture<TransferBetweenAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferBetweenAccountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferBetweenAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
