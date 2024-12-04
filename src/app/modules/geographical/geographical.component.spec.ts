import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeographicalComponent } from './geographical.component';

describe('GeographicalComponent', () => {
  let component: GeographicalComponent;
  let fixture: ComponentFixture<GeographicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeographicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeographicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
