import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ion-app>
    <ion-router-outlet id="main"></ion-router-outlet>
  </ion-app>`,
})
export class AppComponent {
}
