import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedNavigationComponent } from './animated-navigation.component';

describe('AnimatedNavigationComponent', () => {
  let component: AnimatedNavigationComponent;
  let fixture: ComponentFixture<AnimatedNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimatedNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimatedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
