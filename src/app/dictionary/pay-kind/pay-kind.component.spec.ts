import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayKindComponent } from './pay-kind.component';

describe('PayKindComponent', () => {
  let component: PayKindComponent;
  let fixture: ComponentFixture<PayKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
