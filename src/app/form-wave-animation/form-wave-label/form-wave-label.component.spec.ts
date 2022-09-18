import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWaveLabelComponent } from './form-wave-label.component';

describe('FormWaveLabelComponent', () => {
  let component: FormWaveLabelComponent;
  let fixture: ComponentFixture<FormWaveLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWaveLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWaveLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
