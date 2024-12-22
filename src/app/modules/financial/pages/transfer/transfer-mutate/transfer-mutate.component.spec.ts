import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferMutateComponent } from './transfer-mutate.component';

describe('TransferMutateComponent', () => {
  let component: TransferMutateComponent;
  let fixture: ComponentFixture<TransferMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferMutateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
