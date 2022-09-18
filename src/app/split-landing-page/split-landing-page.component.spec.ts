import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitLandingPageComponent } from './split-landing-page.component';

describe('SplitLandingPageComponent', () => {
  let component: SplitLandingPageComponent;
  let fixture: ComponentFixture<SplitLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
