import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeTableItemComponent } from './exchange-table-item.component';

describe('ExchangeTableItemComponent', () => {
  let component: ExchangeTableItemComponent;
  let fixture: ComponentFixture<ExchangeTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExchangeTableItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
