import { PokemonComponent } from './../pages/wiki/pokemon/pokemon.component';
import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pokemon } from '../models/model';
import { PokemonService } from './pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private modalController: ModalController, private pokemonService: PokemonService) { }

  getPokemonAvatar(pokemon: Pokemon) {
    return pokemon.sprites.other.dream_world.front_default ?
      pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other["official-artwork"].front_default;
  }

  async showDetailPokemon(selectedPokemon: Pokemon) {
    const modal = await this.modalController.create({
      component: PokemonComponent,
      componentProps: {
        'pokemon': selectedPokemon
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
