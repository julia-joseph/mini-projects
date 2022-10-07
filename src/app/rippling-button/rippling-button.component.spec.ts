import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplingButtonComponent } from './rippling-button.component';

describe('RipplingButtonComponent', () => {
  let component: RipplingButtonComponent;
  let fixture: ComponentFixture<RipplingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RipplingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RipplingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
