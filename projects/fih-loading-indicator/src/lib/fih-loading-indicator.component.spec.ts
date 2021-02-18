import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FihLoadingIndicatorComponent} from './fih-loading-indicator.component';

describe('LoadingIndicatorComponent', () => {
  let component: FihLoadingIndicatorComponent;
  let fixture: ComponentFixture<FihLoadingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FihLoadingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FihLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
