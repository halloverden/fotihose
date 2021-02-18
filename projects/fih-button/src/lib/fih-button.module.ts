import { NgModule } from '@angular/core';
import {FihButtonComponent} from './fih-button.component';
import {FihLoadingIndicatorComponent, FihLoadingIndicatorModule} from '@fotihose/loading-indicator';

@NgModule({
  declarations: [
    FihButtonComponent
  ],
  imports: [
    FihLoadingIndicatorModule
  ],
  exports: [
    FihButtonComponent
  ],
  entryComponents: [
    FihLoadingIndicatorComponent
  ]
})
export class FihButtonModule { }
