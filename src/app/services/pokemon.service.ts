import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrls, limit, Pokemon, Responds } from './../models/model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getListPokemon(url?: string): Observable<Responds> {
    return this.http.get<Responds>(url ? url : `${baseUrls}/pokemon?limit=${limit}`);
  }

  getDataByString(str: string) {
    return this.http.get(`${baseUrls}/${str}`);
  }

  getDataByUrl(url: string) {
    return this.http.get(url);
  }

  searchPokemon(str: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${baseUrls}/pokemon/${str}`);
  }

  getPokemonAvatar(pokemon: Pokemon) {
    return pokemon.sprites.other.dream_world.front_default ?
      pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other['official-artwork'].front_default;
  }
}

  // getEvolutionChain(url?: string): Observable<EvolutionChain | Responds> {
  //   return this.http.get<EvolutionChain | Responds>(url ? url : `${baseUrls}/evolution-chain`);
  // }

  // getPokemonSpecies(url: string): Observable<PokemonSpecies | Responds> {
  //   return this.http.get<PokemonSpecies | Responds>(url ? url : `${baseUrls}/pokemon-species`);
  // }

  // getPokemon(url: string): Observable<Pokemon> {
  //   return this.http.get<Pokemon>(url);
  // }

  // getTypes(): Observable<Responds> {
  //   return this.http.get<Responds>(`${baseUrls}/type`);
  // }

  // getType(url: string): Observable<TypeRelation> {
  //   return this.http.get<TypeRelation>(url);
  // }

  // getGenders(): Observable<Responds> {
  //   return this.http.get<Responds>(`${baseUrls}/gender`);
  // }

  // getGender(url: string): Observable<GenderRelation> {
  //   return this.http.get<GenderRelation>(url ? url : `${baseUrls}/gender`);
  // }

  // getGrowthRates(): Observable<Responds> {
  //   return this.http.get<Responds>(`${baseUrls}/growth-rate`);
  // }

  // getGrowthRate(url: string): Observable<GrowthRateRelation> {
  //   return this.http.get<GrowthRateRelation>(url);
  // }

  // getHabitats(): Observable<Responds> {
  //   return this.http.get<Responds>(`${baseUrls}/pokemon-habitat`);
  // }

  // getHabitat(url: string): Observable<HabitatRelation> {
  //   return this.http.get<HabitatRelation>(url);
  // }

  // getColors(): Observable<Responds> {
  //   return this.http.get<Responds>(`${baseUrls}/pokemon-color`);
  // }

  // getColor(url: string): Observable<Responds> {
  //   return this.http.get<Responds>(url);
  // }

  // getPokemonShapes(): Observable<Responds> {
  //   return this.http.get<Responds>(`${baseUrls}/pokemon-shape`);
  // }

  // getPokemonShape(url: string): Observable<PokemonShapeRelation> {
  //   return this.http.get<PokemonShapeRelation>(url);
  // }

  // getEncounters(url: string): Observable<Encounter[]> {
  //   return this.http.get<Encounter[]>(url);
  // }
// gender   growth-rate     pokemon-habitat     type    pokemon-color pokemon-shape
