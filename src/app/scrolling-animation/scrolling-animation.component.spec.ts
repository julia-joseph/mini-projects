import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingAnimationComponent } from './scrolling-animation.component';

describe('ScrollingAnimationComponent', () => {
  let component: ScrollingAnimationComponent;
  let fixture: ComponentFixture<ScrollingAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
