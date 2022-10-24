import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleVerticalSliderComponent } from './double-vertical-slider.component';

describe('DoubleVerticalSliderComponent', () => {
  let component: DoubleVerticalSliderComponent;
  let fixture: ComponentFixture<DoubleVerticalSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleVerticalSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleVerticalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
