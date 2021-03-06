import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTextGenericComponent } from './widget-text-generic.component';

describe('WidgetTextGenericComponent', () => {
  let component: WidgetTextGenericComponent;
  let fixture: ComponentFixture<WidgetTextGenericComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTextGenericComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTextGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
