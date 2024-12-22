import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrotcutIconsComponent } from './shrotcut-icons.component';

describe('ShrotcutIconsComponent', () => {
  let component: ShrotcutIconsComponent;
  let fixture: ComponentFixture<ShrotcutIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShrotcutIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShrotcutIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
