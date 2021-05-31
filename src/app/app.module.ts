import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FihButtonModule} from '../../projects/fih-button/src/lib/fih-button.module';
import {FihLoadingIndicatorModule} from '../../projects/fih-loading-indicator/src/lib/fih-loading-indicator.module';
import {FihTooltipModule} from '../../projects/fih-tooltip/src/lib/fih-tooltip.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FihButtonModule,
    FihLoadingIndicatorModule,
    FihTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
