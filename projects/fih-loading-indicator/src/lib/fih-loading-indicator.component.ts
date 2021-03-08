import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input, OnChanges,
  Renderer2, SimpleChanges,
  ViewChild
} from '@angular/core';

/**
 * @example <fih-loading-indicator size=15 color=#00></fih-loading-indicator>
 */
@Component({
  selector: 'fih-loading-indicator',
  templateUrl: './fih-loading-indicator.component.html',
  styleUrls: ['./fih-loading-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihLoadingIndicatorComponent implements AfterViewInit, OnChanges {
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
    this._setSize();
    this._setColor();
  }

  /**
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    // Color
    if (changes.color && !changes.color.isFirstChange()) {
      this._setColor();
    }

    // Size
    if (changes.size && !changes.size.isFirstChange()) {
      this._setSize();
    }
  }

  /**
   *
   */
  private _setColor(): void {
    this._renderer.setStyle(this.spinnerWrapper.nativeElement, 'stroke', this.color);
  }

  /**
   *
   */
  private _setSize(): void {
    this._renderer.setStyle(this.loadingIndicator.nativeElement, 'height', this.size + 'px');
    this._renderer.setStyle(this.loadingIndicator.nativeElement, 'width', this.size + 'px');
  }
}
