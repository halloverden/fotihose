import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
  ViewChild
} from '@angular/core';

/**
 * @example <fih-icon-input><input /></fih-icon-input>
 */
@Component({
  selector: 'fih-icon-input',
  templateUrl: './fih-icon-input.component.html',
  styleUrls: ['./fih-icon-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihIconInputComponent implements AfterViewInit, OnChanges {
  @Output()
  clicked?: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  disabled = false;

  @Input()
  iconPath = 'assets/images/svg/spyglass.svg';

  @Input()
  iconPosition?: 'left' | 'right' = 'right';

  @Input()
  iconSize = 15;

  @HostBinding('class.processing')
  @Input()
  processing = false;

  @HostBinding('class.left')
  get left(): boolean {
    return (this.iconPosition && this.iconPosition === 'left');
  }

  @HostBinding('class.right')
  get right(): boolean {
    return (!this.iconPosition || this.iconPosition === 'right');
  }

  @ViewChild('icon', {static: false})
  icon: ElementRef<SVGImageElement>;

  /**
   *
   */
  constructor(private _renderer: Renderer2) {}

  /**
   *
   */
  clickAction(): void {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }

  /**
   *
   */
  ngAfterViewInit(): void {
    this._setSize();
  }

  /**
   *
   */
  ngOnChanges(changes: SimpleChanges) {
    // Size
    if (changes.iconSize && !changes.iconSize.isFirstChange()) {
      this._setSize();
    }
  }

  /**
   *
   */
  private _setSize(): void {
    this._renderer.setStyle(this.icon.nativeElement, 'height', this.iconSize + 'px');
    this._renderer.setStyle(this.icon.nativeElement, 'width', this.iconSize + 'px');
  }
}
