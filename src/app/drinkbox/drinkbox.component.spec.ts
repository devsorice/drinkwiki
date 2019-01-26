import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkboxComponent } from './drinkbox.component';

describe('DrinkboxComponent', () => {
  let component: DrinkboxComponent;
  let fixture: ComponentFixture<DrinkboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
