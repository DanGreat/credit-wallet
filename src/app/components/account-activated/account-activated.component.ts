import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account-activated',
  templateUrl: './account-activated.component.html',
  styleUrls: ['./account-activated.component.scss'],
})
export class AccountActivatedComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
              private router: Router) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss()
  }

  proceedToDashboard() {
    this.closeModal()
    this.router.navigate(['/tabs'])
  }

  changePassword() {
    this.closeModal()
    this.router.navigate(['/new-password'])

  }

}
