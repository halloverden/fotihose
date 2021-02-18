import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FihButtonModule} from '../../projects/fih-button/src/lib/fih-button.module';
import {FihLoadingIndicatorModule} from 'fih-loading-indicator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FihButtonModule,
    FihLoadingIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
