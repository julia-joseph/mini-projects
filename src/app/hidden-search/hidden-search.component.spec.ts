import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenSearchComponent } from './hidden-search.component';

describe('HiddenSearchComponent', () => {
  let component: HiddenSearchComponent;
  let fixture: ComponentFixture<HiddenSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
