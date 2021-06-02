import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FihTooltipComponent } from './fih-tooltip.component';

describe('FihTooltipComponent', () => {
  let component: FihTooltipComponent;
  let fixture: ComponentFixture<FihTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FihTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FihTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
