import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  buttonProcessing = false;
  button2Processing = false;

  /**
   *
   */
  alert(message: string): void {
    window.alert(message);
  }
}
