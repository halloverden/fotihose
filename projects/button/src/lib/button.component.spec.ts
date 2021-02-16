import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FihButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: FihButtonComponent;
  let fixture: ComponentFixture<FihButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FihButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FihButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
