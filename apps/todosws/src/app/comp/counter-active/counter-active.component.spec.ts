import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterActiveComponent } from './counter-active.component';

describe('CounterActiveComponent', () => {
  let component: CounterActiveComponent;
  let fixture: ComponentFixture<CounterActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
