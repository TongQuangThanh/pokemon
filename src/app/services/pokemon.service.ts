import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon, Responds } from '../models/model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrls = 'https://pokeapi.co/api/v2';
  
  constructor(private http: HttpClient) { }

  getListPokemon(url?: string): Observable<Responds> {
    return this.http.get<Responds>(url ? url : `${this.baseUrls}/pokemon`);
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
