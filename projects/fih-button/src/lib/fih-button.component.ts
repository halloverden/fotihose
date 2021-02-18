import {
  AfterViewInit,
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactory,
  ComponentFactoryResolver, ComponentRef,
  ContentChild,
  ElementRef,
  Injector,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges, Type, ViewContainerRef
} from '@angular/core';
import {FihLoadingIndicatorComponent} from 'fih-loading-indicator';

/**
 * Inject native HTML button or an a tag, and add the #button tag to it so this component can identify it.
 *
 * @example <fih-button><button #button></button></fih-button>
 * @example <fih-button><a #button></a></fih-button>
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
  buttonId = 'fih-btn';

  buttonText: string;

  @Input()
  processing?: boolean;

  private _host: HTMLElement;

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
    // Set static width to keep width when content changes (when processing)
    this._renderer.setStyle(this.button.nativeElement, 'width', this.button.nativeElement.offsetWidth + 'px');

    // Uppercase button text
    this.buttonText = this.button.nativeElement.innerText.toUpperCase();

    // Wrap button content in span (host element) w/ known id
    this._host = this._renderer.createElement('span');
    this._host.id = this.buttonId;

    this._renderer.setProperty(this.button.nativeElement, 'innerHTML', '');
    this._renderer.insertBefore(this.button.nativeElement, this._host, this.button.nativeElement.firstChild);

    if (this.processing) {
      this._loadComponent(FihLoadingIndicatorComponent);
    } else {
      this._renderer.setProperty(this._host, 'innerHTML', this.buttonText);
    }

    // ADD STYLES
    this._renderer.addClass(this.button.nativeElement, 'btn');
  }

  /**
   *
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.processing && !changes.processing.isFirstChange()) {
      this._renderer.setProperty(this.button.nativeElement, 'disabled', changes.processing.currentValue); // TODO: Check

      if (changes.processing.currentValue) {
        this._loadComponent(FihLoadingIndicatorComponent);
      } else {
        this._renderer.setProperty(this._host, 'innerHTML', this.buttonText); // TODO: Is it cleaned up? Better way?
      }
    }
  }

  /**
   *
   */
  private _loadComponent(comp: Type<FihLoadingIndicatorComponent>, parentNode: HTMLElement | ViewContainerRef = this._host): ComponentRef<FihLoadingIndicatorComponent> {
    const factory: ComponentFactory<FihLoadingIndicatorComponent> = this._resolver.resolveComponentFactory(comp);
    const ref = factory.create(this._injector, [], parentNode);
    this._applicationRef.attachView(ref.hostView);

    ref.instance.size = 15; // TODO: Make dynamic (follow content size)
    ref.instance.color = '#fff';

    return ref;
  }
}
