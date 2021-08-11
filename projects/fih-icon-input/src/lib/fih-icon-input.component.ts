import {ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

/**
 * @example <fih-icon-input></fih-loading-indicator>
 */
@Component({
  selector: 'fih-icon-input',
  templateUrl: './fih-icon-input.component.html',
  styleUrls: ['./fih-icon-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihIconInputComponent implements OnInit {
  @Output()
  clicked?: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  disabled = false;

  @Input()
  iconClassList = '';

  @Input()
  iconPath = 'assets/images/svg/spyglass.svg';

  @Input()
  iconPosition?: 'left' | 'right' = 'right';

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
  ngOnInit(): void {
    console.log(this.iconPath);
  }
}
