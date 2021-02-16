import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';

/**
 * @example <fih-loading-indicator size=15></fih-loading-indicator>
 */
@Component({
  selector: 'fih-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihLoadingIndicatorComponent implements AfterViewInit {
  @Input()
  color = '#000';

  @ViewChild('loadingIndicator', {static: false})
  loadingIndicator: ElementRef;

  @Input()
  size: number;

  @ViewChild('spinnerWrapper', {static: false})
  spinnerWrapper: ElementRef;

  /**
   *
   */
  constructor(private _renderer: Renderer2) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    this._renderer.setStyle(this.loadingIndicator.nativeElement, 'height', this.size + 'px');
    this._renderer.setStyle(this.loadingIndicator.nativeElement, 'width', this.size + 'px');
    this._renderer.setStyle(this.spinnerWrapper.nativeElement, 'stroke', this.color);
  }
}
