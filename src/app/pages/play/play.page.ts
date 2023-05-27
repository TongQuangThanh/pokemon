import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon, storageKey } from '../../models/model';
import { PokemonService } from './../../services/pokemon.service';
import { forkJoin } from 'rxjs';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  player1: Pokemon[] = [];
  player1Selected: Pokemon;
  computer: Pokemon[] = [];
  computerSelected: Pokemon;

  constructor(private storageService: StorageService, public pokemonService: PokemonService) { }

  ngOnInit() {
    const arr = [];
    const data: Pokemon[] = this.storageService.get(storageKey.player1);
    if (data) {
      this.player1 = data;
      this.player1Selected = data[0];
      for (let i = 0; i < data.length; i++) {
        const id = Math.floor((Math.random() * 898) + 1);
        arr.push(this.pokemonService.searchPokemon(id));
      }
      forkJoin(arr).subscribe(
        (data: Pokemon[]) => {
          if (data) {
            this.computer = data;
            this.computerSelected = data[0];
          }
        },
        error => console.log(error)
      );
    }
  }

  choosePokemon(pokemon: Pokemon) {
    this.player1Selected = pokemon;
  }
}
