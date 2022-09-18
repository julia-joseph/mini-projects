import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventKeycodesComponent } from './event-keycodes.component';

describe('EventKeycodesComponent', () => {
  let component: EventKeycodesComponent;
  let fixture: ComponentFixture<EventKeycodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventKeycodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventKeycodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
