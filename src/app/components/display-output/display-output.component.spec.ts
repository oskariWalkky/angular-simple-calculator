import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOutputComponent } from './display-output.component';

describe('DisplayOutputComponent', () => {
  let component: DisplayOutputComponent;
  let fixture: ComponentFixture<DisplayOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
