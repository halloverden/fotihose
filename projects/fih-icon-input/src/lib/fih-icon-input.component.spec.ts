import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FihIconInputComponent} from './fih-icon-input.component';


describe('FihIconInputComponent', () => {
  let component: FihIconInputComponent;
  let fixture: ComponentFixture<FihIconInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FihIconInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FihIconInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
