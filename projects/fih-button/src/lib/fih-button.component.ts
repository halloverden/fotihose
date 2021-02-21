import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ContentChild,
  ElementRef,
  Injector,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  Type
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
  loadingIndicatorColor = '#000';

  @Input()
  processing?: boolean;

  private _originalButtonContent: any;

  /**
   *
   */
  constructor(private _applicationRef: ApplicationRef,
              private _injector: Injector,
              private _renderer: Renderer2,
              private _resolver: ComponentFactoryResolver) {}

  /**
   *
   */
  ngAfterViewInit(): void {
    // Save original content
    this._originalButtonContent = this.button.nativeElement.innerText;

    if (this.processing) {
      this._loadComponent(FihLoadingIndicatorComponent);
    }
  }

  /**
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.processing && !changes.processing.isFirstChange()) {
      this._renderer.setProperty(this.button.nativeElement, 'disabled', changes.processing.currentValue);

      if (changes.processing.currentValue) {
        this._loadComponent(FihLoadingIndicatorComponent);
      } else {
        this._renderer.setProperty(this.button.nativeElement, 'innerHTML', this._originalButtonContent); // TODO: Is it cleaned up? Better way?
      }
    }
  }

  /**
   *
   */
  private _loadComponent(comp: Type<FihLoadingIndicatorComponent>): void {
    const factory: ComponentFactory<FihLoadingIndicatorComponent> = this._resolver.resolveComponentFactory(comp);
    const ref = factory.create(this._injector, [], this.button.nativeElement);
    ref.instance.size = 15; // TODO: Make dynamic (follow content size)
    ref.instance.color = this.loadingIndicatorColor;
    this._applicationRef.attachView(ref.hostView);
  }
}
