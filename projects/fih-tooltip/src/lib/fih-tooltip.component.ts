import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
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
export class FihTooltipComponent implements OnInit {
  @Input()
  arrowPosition: 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right' | 'top-left' | 'top' | 'top-right' | 'none';

  @Output()
  clicked: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  id: string;

  @Input()
  show = false;

  @Input()
  showOnHover = true;

  @Input()
  showOnLoad = false;

  @Input()
  text: string;

  @ViewChild('tooltipRef', {static: true})
  tooltipRef: ElementRef;

  private readonly _window: Window;

  /**
   *
   */
  constructor() {
    this._window = getWindow();
  }

  /**
   *
   */
  ngOnInit(): void {
    this._validateConfig();

    // TODO: Move to after view init
    if (this.showOnLoad) {
      this.open();
    }
  }

  /**
   *
   */
  click(): void {
    this.open();
    this.clicked.emit();
  }

  /**
   *
   */
  close(): void {
    this.show = false;
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
    this._positionWithinBounds();
    this.show = true;
  }

  /**
   * Perform checks for whether a tooltip is out of bounds. Clockwise order
   *
   */
  private _positionWithinBounds(): void {
    if (!this.arrowPosition || this.arrowPosition === FfTooltipArrowPositions.none) {
      return;
    }

    const overflows = this._getOverflows();

    switch (this.arrowPosition) {
      case FfTooltipArrowPositions.top:
        if (overflows.bottom) {
          this.arrowPosition = FfTooltipArrowPositions.bottom;
        }
        break;

      case FfTooltipArrowPositions.topRight:
        if (overflows.bottom && overflows.left) {
          this.arrowPosition = FfTooltipArrowPositions.bottomLeft;
        } else if (overflows.left) {
          this.arrowPosition = FfTooltipArrowPositions.topLeft;
        } else if (overflows.bottom) {
          this.arrowPosition = FfTooltipArrowPositions.bottomRight;
        }
        break;

      case FfTooltipArrowPositions.right:
        if (overflows.left) {
          this.arrowPosition = FfTooltipArrowPositions.left;
        }
        break;

      case FfTooltipArrowPositions.bottomRight:
        if (overflows.top && overflows.left) {
          this.arrowPosition = FfTooltipArrowPositions.topLeft;
        } else if (overflows.left) {
          this.arrowPosition = FfTooltipArrowPositions.bottomLeft;
        } else if (overflows.top) {
          this.arrowPosition = FfTooltipArrowPositions.topRight;
        }
        break;

      case FfTooltipArrowPositions.bottom:
        if (overflows.top) {
          this.arrowPosition = FfTooltipArrowPositions.top;
        }
        break;

      case FfTooltipArrowPositions.bottomLeft:
        if (overflows.top && overflows.right) {
          this.arrowPosition = FfTooltipArrowPositions.topRight;
        } else if (overflows.right) {
          this.arrowPosition = FfTooltipArrowPositions.bottomRight;
        } else if (overflows.top) {
          this.arrowPosition = FfTooltipArrowPositions.bottomRight;
        }
        break;

      case FfTooltipArrowPositions.left:
        if (overflows.right) {
          this.arrowPosition = FfTooltipArrowPositions.right;
        }
        break;

      case FfTooltipArrowPositions.topLeft:
        if (overflows.bottom && overflows.right) {
          this.arrowPosition = FfTooltipArrowPositions.bottomRight;
        } else if (overflows.right) {
          this.arrowPosition = FfTooltipArrowPositions.topRight;
        } else if (overflows.bottom) {
          this.arrowPosition = FfTooltipArrowPositions.bottomLeft;
        }
        break;
    }
  }

  /**
   *
   */
  private _getOverflows(): {top: boolean, right: boolean, bottom: boolean, left: boolean} {
    const tipSize: DOMRect = this.tooltipRef.nativeElement.getBoundingClientRect();
    const vh = this._window.innerHeight || 0;
    const vw = this._window.innerWidth || 0;

    return {
      top: (tipSize.top < 0),
      right: (tipSize.right > 0 && tipSize.right > vw),
      bottom: (tipSize.bottom > 0 && tipSize.bottom > vh),
      left: (tipSize.left > 0 && tipSize.left < 0)
    };
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
