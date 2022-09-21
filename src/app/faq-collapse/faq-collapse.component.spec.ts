import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCollapseComponent } from './faq-collapse.component';

describe('FaqCollapseComponent', () => {
  let component: FaqCollapseComponent;
  let fixture: ComponentFixture<FaqCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqCollapseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
