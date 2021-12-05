import { PokemonComponent } from './../pages/wiki/pokemon/pokemon.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pokemon } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private modalController: ModalController) { }

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
