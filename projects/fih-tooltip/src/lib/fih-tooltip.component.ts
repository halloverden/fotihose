import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit, Renderer2,
  ViewChild
} from '@angular/core';

function getWindow(): any {
  return window;
}

export enum FfTooltipArrowPositions {
  bottom = 'bottom',
  bottomLeft = 'bottom-left',
  bottomRight = 'bottom-right',
  left = 'left',
  right = 'right',
  topLeft = 'top-left',
  top = 'top',
  topRight = 'top-right',
  none = 'none'
}

@Component({
  selector: 'fih-tooltip',
  templateUrl: 'fih-tooltip.component.html',
  styleUrls: ['fih-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihTooltipComponent implements OnInit, AfterViewInit {
  @Input()
  arrowPosition: 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' | 'top-left' | 'top' | 'top-right' | 'none' | string;

  @Input()
  id: string;

  @Input()
  minWidth: number = undefined;

  @Input()
  show = false;

  @Input()
  showOnHover = true;

  @Input()
  text: string;

  @ViewChild('tooltip', {static: true})
  tooltip: ElementRef;

  @ViewChild('tooltipArrow', {static: true})
  tooltipArrow: ElementRef;

  @Input()
  width: number = undefined;

  private readonly _window: Window;

  /**
   *
   */
  constructor(private _cdr: ChangeDetectorRef,
              private _renderer: Renderer2) {
    this._window = getWindow();
  }

  /**
   *
   */
  ngAfterViewInit() {
    if (this.width) {
      this._renderer.setStyle(this.tooltipArrow.nativeElement, 'width', this.width + 'px');
    }

    if (this.minWidth) {
      this._renderer.setStyle(this.tooltipArrow.nativeElement, 'min-width', this.minWidth + 'px');
    }

    if (this.show) {
      this.open();
    }
  }

  /**
   *
   */
  ngOnInit(): void {
    this._validateConfig();
  }

  /**
   *
   */
  click(): void {
    this.open();
  }

  /**
   *
   */
  close(): void {
    this.show = false;
    this._cdr.detectChanges();
  }

  /**
   *
   */
  mouseEnter(): void {
    if (this.showOnHover) {
      this.open();
    }
  }

  /**
   *
   */
  mouseLeave(): void {
    if (this.showOnHover) {
      this.close();
    }
  }

  /**
   *
   */
  open(): void {
    this.show = true;
    this._cdr.detectChanges();
  }

  /**
   *
   */
  private _validateConfig(): void {
    if (!this.id) {
      console.error('The tooltip component needs an ID');
    }

    // TODO: Validate that the string exists in the enum
    if (!this.arrowPosition) {
      console.error('The tooltip component needs to know where to put the arrow');
    }
  }
}
