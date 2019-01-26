import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdrinkComponent } from './viewdrink.component';

describe('ViewdrinkComponent', () => {
  let component: ViewdrinkComponent;
  let fixture: ComponentFixture<ViewdrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
