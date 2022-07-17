import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { AlertController, ModalController, NavController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BackButtonHandlerService {

  constructor( 
    private alertCtrl: AlertController,
    private platform: Platform,
    private router: Router,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  init() {
    this.platform.backButton.subscribeWithPriority(10, async () => {

      const url = this.router.url;
      const modal = await this.modalCtrl.getTop();

      console.log('Has Modal Popup: ', modal)
      if (modal) { 
        this.modalCtrl.dismiss();
        return;
      } else if (url === '/home') {
        this.confirmExitApp();
      } else {
        this.navCtrl.back();
      }
      
    });
  }

  async confirmExitApp() {
    try {
      this.alertCtrl
        .getTop()
        .then((v) => (v ? this.alertCtrl.dismiss() : null));
    } catch (e) {}

    const alert = await this.alertCtrl.create({
      header: 'Exit App',
      message: 'Do you want to exit the app?',
      animated: true,
      translucent: true,
      backdropDismiss: false,
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
        },
        {
          text: 'YES',
          handler: () => {
            App.exitApp();
          },
        },
      ],
    });

    await alert.present();
  }
}
