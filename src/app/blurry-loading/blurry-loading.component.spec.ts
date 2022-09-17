import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurryLoadingComponent } from './blurry-loading.component';

describe('BlurryLoadingComponent', () => {
  let component: BlurryLoadingComponent;
  let fixture: ComponentFixture<BlurryLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurryLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurryLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
