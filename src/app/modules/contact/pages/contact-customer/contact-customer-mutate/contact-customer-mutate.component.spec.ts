import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCustomerMutateComponent } from './contact-customer-mutate.component';

describe('ContactCustomerMutateComponent', () => {
  let component: ContactCustomerMutateComponent;
  let fixture: ComponentFixture<ContactCustomerMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactCustomerMutateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCustomerMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
