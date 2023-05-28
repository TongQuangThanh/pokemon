import { PokemonComponent } from './../pages/wiki/pokemon/pokemon.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pokemon } from '../models/model';
import { Subject } from 'rxjs';
import { LOCAL_LANG } from '../../environments/const';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public exit = new Subject<string>();
  exit$ = this.exit.asObservable();
  public lang = localStorage.getItem(LOCAL_LANG) || 'en';
  constructor(private modalController: ModalController) { }

  exitApp() {
    this.exit.next('');
  }

  async showDetailPokemon(selectedPokemon: Pokemon) {
    const modal = await this.modalController.create({
      component: PokemonComponent,
      componentProps: {
        pokemon: selectedPokemon
      }
    });
    await modal.present();
    modal.onWillDismiss().then((result: any) => {
      if (result && result.data) {
        this.showDetailPokemon(result.data);
      }
    });
  }
}
