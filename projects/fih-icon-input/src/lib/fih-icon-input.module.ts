import { NgModule } from '@angular/core';
import { FihIconInputComponent } from './fih-icon-input.component';
import {FihLoadingIndicatorComponent, FihLoadingIndicatorModule} from '@fotihose/loading-indicator';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    FihIconInputComponent
  ],
  imports: [
    CommonModule,
    FihLoadingIndicatorModule
  ],
  exports: [
    FihIconInputComponent
  ],
  entryComponents: [
    FihLoadingIndicatorComponent
  ]
})
export class FihIconInputModule { }
