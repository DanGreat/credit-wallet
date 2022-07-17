import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-password-changed',
  templateUrl: './password-changed.component.html',
  styleUrls: ['./password-changed.component.scss'],
})
export class PasswordChangedComponent implements OnInit {

  constructor(private modalCtrl: ModalController,
    private router: Router) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss()
  }

  changePassword() {
    
  }

}
