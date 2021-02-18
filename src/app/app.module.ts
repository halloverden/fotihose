import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FihLoadingIndicatorModule} from 'fih-loading-indicator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FihLoadingIndicatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
