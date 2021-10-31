import { ModalController } from '@ionic/angular';
import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon, Responds, storageKey } from '../../models/model';
import { StorageService } from '../../services/storage.service';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
  styleUrls: ['./wiki.scss'],
})
export class WikiPage implements OnInit {
  results: Pokemon[] = [];
  nextUrl = '';
  queryText = '';
  showSearchBar = false;

  constructor(private pokemonService: PokemonService, private storageService: StorageService, private modalController: ModalController) { }
  
  ngOnInit() {
    this.loadData();
  }

  getPokemonAvatar(pokemon: Pokemon) {
    return pokemon.sprites.other.dream_world.front_default? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.other["official-artwork"].front_default;
  }

  searchPokemon(){
    
  }

  loadData() {
    this.pokemonService.getListPokemon(this.nextUrl).subscribe((data: Responds) => {
      this.nextUrl = data.next;
      const promises = [];
      for (const pokemon of data.results) {
        promises.push(this.pokemonService.getPokemon(pokemon.url).toPromise());
      }
      Promise.all(promises).then(values => {
        for (const val of values) {
          this.results.push(val);
        }
        this.storageService.set(storageKey.listAll, this.results);
      });
    });
  }

  async showDetailPokemon(id: number) {
    const modal = await this.modalController.create({
      component: PokemonComponent,
      componentProps: {
        'pokemon': this.results.find(pokemon => pokemon.id === id)
      }
    });
    await modal.present();
  }
}
