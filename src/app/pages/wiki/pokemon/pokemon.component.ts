import { ModalController } from '@ionic/angular';
import { Encounter, Pokemon, statsData, typesData, Type, Ability, TypeRelation, DoubleDamageTo,
        PokemonSpecies, Variety, EvolutionChain, DoubleDamageFrom } from './../../../models/model';
import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';
import { SharedService } from './../../../services/shared.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  images = [];
  pokemonSpecies: PokemonSpecies;
  names: string[] = [];
  locationArea = [];
  statArray = [];
  typeArray = [];
  abilityArray = [];
  avoidTo = [];
  bestToBeat = [];
  points = 0;
  varieties: Pokemon[] = [];
  varietyTypes = [];
  evolutionTypes = [];
  evolutions: Pokemon[] = [];
  slideOpts = {
    initialSlide: 0,
    autoplay: true,
    height: 100
  };

  constructor(private modalController: ModalController, public pokemonService: PokemonService, public sharedService: SharedService) { }

  ngOnInit() {
    const promises = [];
    for (const type of this.pokemon.types) {
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
          };
        });
        const damageTo = val.damage_relations.double_damage_to.map((it: DoubleDamageTo) => {
          const typeDefined = typesData.find(type => type.name === it.name);
          return {
            name: it.name,
            color: typeDefined.color,
            opacity: typeDefined.opacity,
            url: typeDefined.url
          };
        });
        this.avoidTo = this.avoidTo.concat(damageFrom);
        this.bestToBeat = this.bestToBeat.concat(damageTo);
      }
    });
    this.pokemonService.getDataByUrl(this.pokemon.species.url).subscribe((data: PokemonSpecies) => {
      this.pokemonSpecies = data;
      const names = this.pokemonSpecies.names.map(it => it.name);
      this.names = [...new Set(names)];
      if (this.pokemonSpecies.varieties.length > 1) {
        const varietiesPromise = [];
        const varietyPokemon = this.pokemonSpecies.varieties.filter((variety: Variety) => !variety.is_default);
        for (const it of varietyPokemon) {
          varietiesPromise.push(this.pokemonService.getDataByUrl(it.pokemon.url).toPromise());
        }
        Promise.all(varietiesPromise).then((values: Pokemon[]) => {
          this.varieties = values;
          this.varietyTypes = this.varieties.map((variety: Pokemon) =>
            variety.types.map((type: Type) => {
              const typeDefined = typesData.find(it => it.name === type.type.name);
              return {
                name: typeDefined.name,
                color: typeDefined.color,
                opacity: typeDefined.opacity,
                url: typeDefined.url
              };
            })
          );
        });
      }
      this.pokemonService.getDataByUrl(this.pokemonSpecies.evolution_chain.url).subscribe(async (chainData: EvolutionChain) => {
        let chain = chainData.chain;
        while (chain && chain.species) {
          const pok = await this.pokemonService.searchPokemon(chain.species.name).toPromise();
          pok['min_level'] = chain.evolves_to[0]?.evolution_details[0]?.min_level || null;
          this.evolutions.push(pok);
          chain = chain.evolves_to[0];
        }
        this.evolutionTypes = this.evolutions.map((evolution: Pokemon) =>
        evolution.types.map((type: Type) => {
            const typeDefined = typesData.find(it => it.name === type.type.name);
            return {
              name: typeDefined.name,
              color: typeDefined.color,
              opacity: typeDefined.opacity,
              url: typeDefined.url
            };
          })
        );
      });
    });
    this.pokemonService.getDataByUrl(this.pokemon.location_area_encounters).subscribe((data: Encounter[]) => {
      this.locationArea = data.map((enc: Encounter) => enc.location_area.name);
    });
    for (const key in this.pokemon.sprites.other) {
      if (Object.prototype.hasOwnProperty.call(this.pokemon.sprites.other, key)) {
        const imageLayer = this.pokemon.sprites.other[key];
        for (const key2 in imageLayer) {
          if (imageLayer[key2]) {
            this.images.push(imageLayer[key2]);
          }
        }
      }
    }
    this.statArray = this.pokemon.stats.map(stat => {
      const statDefined = statsData.find(it => it.name === stat.stat.name);
      this.points += stat.base_stat;
      return {
        name: stat.stat.name,
        val: stat.base_stat,
        percent: 100 * stat.base_stat / statDefined.value,
        color: statDefined.color
      };
    });
    this.typeArray = this.pokemon.types.map((type: Type) => {
      const typeDefined = typesData.find(it => it.name === type.type.name);
      return {
        name: typeDefined.name,
        color: typeDefined.color,
        opacity: typeDefined.opacity,
        url: typeDefined.url
      };
    });
    this.abilityArray = this.pokemon.abilities
      // .filter((ability: Ability) => !ability.is_hidden)
      .map((ability: Ability) => {
        const typeDefined = typesData.find(it => it.name === this.pokemon.types[0].type.name);
        return {
          name: ability.ability.name,
          color: typeDefined.color,
          opacity: typeDefined.opacity,
          url: typeDefined.url,
          hidden: ability.is_hidden
        };
      });
  }

<<<<<<< HEAD
=======
  getPokemonAvatar(pokemon: Pokemon) {
    return pokemon.sprites.other.dream_world.front_default ?
      pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other['official-artwork'].front_default;
  }

>>>>>>> 87f5b166b18e41edcccba925399f7b0ff1314c12
  showPokemon(pokemon: Pokemon) {
    if (!(pokemon.id === this.pokemon.id)) {
      this.modalController.dismiss(pokemon);
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }

  goSameType(item: { name: string, color: string, opacity: string, url: string }) {
    this.modalController.dismiss({ name: item.name, url: item.url });
  }

  prev() {

  }

  next() {

  }
}
