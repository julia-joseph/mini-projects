import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeClockComponent } from './theme-clock.component';

describe('ThemeClockComponent', () => {
  let component: ThemeClockComponent;
  let fixture: ComponentFixture<ThemeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
