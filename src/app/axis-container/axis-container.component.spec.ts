import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisContainerComponent } from './axis-container.component';

describe('AxisContainerComponent', () => {
  let component: AxisContainerComponent;
  let fixture: ComponentFixture<AxisContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
