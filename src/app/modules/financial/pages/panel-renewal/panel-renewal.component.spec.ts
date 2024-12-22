import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRenewalComponent } from './panel-renewal.component';

describe('PanelRenewalComponent', () => {
  let component: PanelRenewalComponent;
  let fixture: ComponentFixture<PanelRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelRenewalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
