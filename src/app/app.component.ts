import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackButtonHandlerService } from './services/back-button-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private backButtonService: BackButtonHandlerService) {
    document.body.setAttribute('color-theme', 'light');
    this.backButtonService.init();
  }
}
