import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitSelectComponent } from './unit-select.component';

describe('UnitSelectComponent', () => {
  let component: UnitSelectComponent;
  let fixture: ComponentFixture<UnitSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
