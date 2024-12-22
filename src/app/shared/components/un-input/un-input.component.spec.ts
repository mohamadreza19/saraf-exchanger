import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnInputComponent } from './un-input.component';

describe('UnInputComponent', () => {
  let component: UnInputComponent;
  let fixture: ComponentFixture<UnInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
