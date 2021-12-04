import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DoubleDamageFrom, DoubleDamageTo, Pokemon, storageKey, TypeRelation, typesData } from '../../models/model';
import { PokemonService } from '../../services/pokemon.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  // Gets a reference to the list element
  pokemon: Pokemon;
  queryText = '';
  queryTextUpdate = new Subject<string>();
  loading = false;
  player1: Pokemon[] = [];

  constructor(public pokemonService: PokemonService, private storageService: StorageService,
    public sharedService: SharedService) {
    this.queryTextUpdate.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(value => {
      this.loading = true;
      this.pokemonService.searchPokemon(value).subscribe((data: Pokemon) => {
        if (data) {
          data['type'] = [];
          data['avoidTo'] = [];
          data['bestToBeat'] = [];
          const promises = [];
          for (const type of data.types) {
            const typeDefined = typesData.find(it => it.name === type.type.name);
            data['type'].push({
              name: typeDefined.name,
              color: typeDefined.color,
              opacity: typeDefined.opacity,
              url: typeDefined.url
            })
            promises.push(this.pokemonService.getDataByUrl(type.type.url).toPromise());
          }
          Promise.all(promises).then((values: TypeRelation[]) => {
            for (const val of values) {
              const damageFrom = val.damage_relations.double_damage_from.map((it: DoubleDamageFrom) => {
                const typeDefined = typesData.find(type => type.name === it.name);
                return {
                  name: it.name,
                  color: typeDefined.color,
                  opacity: typeDefined.opacity,
                  url: typeDefined.url
                }
              });
              const damageTo = val.damage_relations.double_damage_to.map((it: DoubleDamageTo) => {
                const typeDefined = typesData.find(type => type.name === it.name);
                return {
                  name: it.name,
                  color: typeDefined.color,
                  opacity: typeDefined.opacity,
                  url: typeDefined.url
                }
              });
              for (const item of damageFrom) {
                if (!data['avoidTo'].find(po => po.name === item.name)) {
                  data['avoidTo'].push(item);
                }
              }
              for (const item of damageTo) {
                if (!data['bestToBeat'].find(po => po.name === item.name)) {
                  data['bestToBeat'].push(item);
                }
              }
            }
          });
          this.pokemon = data;
        }
        this.loading = false;
      }, error => {
        this.loading = false;
      });
    });
  }

  ngOnInit() {
    this.storageService.get(storageKey.player1).then(
      data => {
        if (data) {
          this.player1 = data;
        }
      },
      error => console.log(error)
    );
  }

  checkExist() {
    return !!this.player1.find(po => po.id === this.pokemon.id);
  }

  addPokemon() {
    this.player1.push(this.pokemon);
    this.storageService.set(storageKey.player1, this.player1).then(
      data => {
        this.pokemon = null;
      },
      error => {
        console.log(error);
      });
  }

  removePokemon(id: number) {
    this.player1 = this.player1.filter(po => po.id !== id);
    this.storageService.set(storageKey.player1, this.player1)
  }
}
