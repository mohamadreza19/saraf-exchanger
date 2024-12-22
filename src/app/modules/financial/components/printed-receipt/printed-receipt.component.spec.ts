import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintedReceiptComponent } from './printed-receipt.component';

describe('PrintedReceiptComponent', () => {
  let component: PrintedReceiptComponent;
  let fixture: ComponentFixture<PrintedReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintedReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintedReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
