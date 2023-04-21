import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleTapComponent } from './double-tap.component';

describe('DoubleTapComponent', () => {
  let component: DoubleTapComponent;
  let fixture: ComponentFixture<DoubleTapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleTapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
