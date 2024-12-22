import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholderComponent } from './shareholder.component';

describe('ShareholderComponent', () => {
  let component: ShareholderComponent;
  let fixture: ComponentFixture<ShareholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
