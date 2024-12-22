import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderMutateComponent } from './shareholder-mutate.component';

describe('ShareholderMutateComponent', () => {
  let component: ShareholderMutateComponent;
  let fixture: ComponentFixture<ShareholderMutateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareholderMutateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholderMutateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
