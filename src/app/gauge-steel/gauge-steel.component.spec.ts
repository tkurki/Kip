import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeSteelComponent } from './gauge-steel.component';

describe('GaugeSteelComponent', () => {
  let component: GaugeSteelComponent;
  let fixture: ComponentFixture<GaugeSteelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeSteelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeSteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
