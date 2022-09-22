import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomChoicePickerComponent } from './random-choice-picker.component';

describe('RandomChoicePickerComponent', () => {
  let component: RandomChoicePickerComponent;
  let fixture: ComponentFixture<RandomChoicePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomChoicePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomChoicePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
