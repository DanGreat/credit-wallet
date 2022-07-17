import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AccountActivatedComponent } from '../components/account-activated/account-activated.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async sendVerificationCode() {
    const modal = await this.modalCtrl.create({
      component: AccountActivatedComponent
    })

    return await modal.present();
  }

}
