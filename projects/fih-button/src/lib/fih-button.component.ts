import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ContentChild,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {FihLoadingIndicatorComponent} from '@fotihose/loading-indicator';

/**
 * Inject native HTML button
 *
 * @example <fih-button><button #button></button></fih-button>
 *
 */
@Component({
  selector: 'fih-button',
  templateUrl: './fih-button.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FihButtonComponent implements OnChanges, AfterViewInit {
  @ContentChild('button', {static: false})
  button: ElementRef;

  @Input()
  disableOnProcessing = true;

  @Input()
  loadingIndicatorColor = '#000';

  @Input()
  loadingIndicatorSize = 15;

  @Input()
  processing = false;

  private _originalButtonContent: any;

  /**
   *
   */
  constructor(private _renderer: Renderer2,
              private _resolver: ComponentFactoryResolver,
              private _viewContainerRef: ViewContainerRef) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    // Save original content
    this._originalButtonContent = this.button.nativeElement.innerHTML;
    this._handleLoadingIndicator();
  }

  /**
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    // Disable on processing
    if (changes.disableOnProcessing && !changes.disableOnProcessing.isFirstChange()) {
      this._handleLoadingIndicator();
    }

    // Processing
    if (changes.processing && !changes.processing.isFirstChange()) {
      this._handleLoadingIndicator();
    }

    // Loading indicator color
    if (changes.loadingIndicatorColor && !changes.loadingIndicatorColor.isFirstChange()) {
      this._handleLoadingIndicator();
    }

    // Loading indicator size
    if (changes.loadingIndicatorSize && !changes.loadingIndicatorSize.isFirstChange()) {
      this._handleLoadingIndicator();
    }
  }

  /**
   *
   */
  private _handleLoadingIndicator(): void {
    if (this.processing) {
      const factory: ComponentFactory<FihLoadingIndicatorComponent> = this._resolver.resolveComponentFactory(FihLoadingIndicatorComponent);
      const ref = this._viewContainerRef.createComponent(factory);
      ref.instance.color = this.loadingIndicatorColor;
      ref.instance.size = this.loadingIndicatorSize;
      this._renderer.setProperty(this.button.nativeElement, 'innerHTML', '');
      this._renderer.appendChild(this.button.nativeElement, ref.location.nativeElement);
    } else {
      this._renderer.setProperty(this.button.nativeElement, 'innerHTML', this._originalButtonContent);
    }

    if (this.disableOnProcessing) {
      this._renderer.setProperty(this.button.nativeElement, 'disabled', this.processing);
    }
  }
}
