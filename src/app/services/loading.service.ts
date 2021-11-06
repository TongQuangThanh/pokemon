import { LoadingController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor(public loadingController: LoadingController) { }

  async showLoading() {
    this.loadingController.create({
      // message: 'Loading...'
      duration: 5000
    }).then((response) => {
      response.present();
    });
  }

  hideLoading() {
    this.loadingController.dismiss();
  }
}
