import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PasswordChangedComponent } from '../components/password-changed/password-changed.component';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async changePassword() {
    const modal = await this.modalCtrl.create({
      component: PasswordChangedComponent
    })

    return await modal.present();
  }

}
