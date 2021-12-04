import { limit, NameUrl } from './../../models/model';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { PokemonService } from '../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon, Responds } from '../../models/model';
import { StorageService } from '../../services/storage.service';
import { FilterComponent } from './filter/filter';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'page-wiki',
  templateUrl: 'wiki.html',
  styleUrls: ['./wiki.scss'],
})
export class WikiPage implements OnInit {
  results: Pokemon[] = [];
  nextUrl = '';
  queryText = '';
  queryTextUpdate = new Subject<string>();
  showSearchBar = false;
  loading = true;
  searchMode = false;
  isFilter = false;
  filterName: string[] = [];
  currentIdx = 0;
  totals = 0;
  genders = [];
  growths = [];
  shapes = [];
  colors = [];
  types = [];
  habitats = [];

  constructor(private pokemonService: PokemonService, private storageService: StorageService,
<<<<<<< HEAD
    public routerOutlet: IonRouterOutlet, private modalController: ModalController,
    public sharedService: SharedService) {
    this.queryTextUpdate.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(value => {
      this.pokemonService.searchPokemon(value).subscribe((data: Pokemon) => {
=======
              public routerOutlet: IonRouterOutlet, private modalController: ModalController) { }

  ngOnInit() {
    this.loadData();
  }

  getPokemonAvatar(pokemon: Pokemon) {
    return pokemon.sprites.other.dream_world.front_default ?
      pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other['official-artwork'].front_default;
  }

  searchPokemon() {
    this.loading = true;
    if (this.queryText) {
      this.pokemonService.searchPokemon(this.queryText).subscribe((data: Pokemon) => {
>>>>>>> 87f5b166b18e41edcccba925399f7b0ff1314c12
        this.results = [data];
        this.searchMode = true;
      }, error => {
        this.results = [];
      });
    });
  }

  ngOnInit() {
    this.loadData();
  }

  cancelSearchBar() {
    this.showSearchBar = false;
    this.results = [];
    this.loading = false;
    this.searchMode = false;
    this.loadData();
  }

  loadData() {
    this.loading = true;
    const promises = [];
    if (this.isFilter) {
      for (let i = 0; i < limit; i++) {
        promises.push(this.pokemonService.searchPokemon(this.filterName[this.currentIdx += i]).toPromise());
      }
      this.currentIdx++;
      Promise.all(promises).then(values => {
        for (const val of values) {
          this.results.push(val);
        }
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      });
    } else {
      this.pokemonService.getListPokemon(this.nextUrl).subscribe((data: Responds) => {
        this.nextUrl = data.next;
        this.totals = data.count;
        const selectedUrl = data.results.map((pokemon: NameUrl) => pokemon.url);
        for (const url of selectedUrl) {
          promises.push(this.pokemonService.getDataByUrl(url).toPromise());
        }
        Promise.all(promises).then(values => {
          for (const val of values) {
            this.results.push(val);
          }
          this.loading = false;
        }, error => {
          console.log(error);
          this.loading = false;
        });
      });
    }
  }

<<<<<<< HEAD
=======
  clearSearch() {
    this.searchMode = false;
    this.loadData();
  }

  async showDetailPokemon(id: number) {
    let selectedPokemon = this.results.find(pokemon => pokemon.id === id);
    if (!selectedPokemon) {
      selectedPokemon = await this.pokemonService.searchPokemon(id).toPromise();
    }
    const modal = await this.modalController.create({
      component: PokemonComponent,
      componentProps: {
        pokemon: selectedPokemon
      }
    });
    await modal.present();
    modal.onWillDismiss().then((result: any) => {
      if (result && result.data) {
        if (result.data.id) {
          this.showDetailPokemon(result.data.id);
        } else {
          // this.filterType();
        }
      }
    });
  }

>>>>>>> 87f5b166b18e41edcccba925399f7b0ff1314c12
  async presentFilter() {
    const modal = await this.modalController.create({
      component: FilterComponent,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        selectedGender: this.genders,
        selectedGrowthRate: this.growths,
        selectedShape: this.shapes,
        selectedColor: this.colors,
        selectedType: this.types,
        selectedHabitat: this.habitats
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
      this.isFilter = data.isFilter;
      this.genders = data.filter.genders;
      this.growths = data.filter.growths;
      this.shapes = data.filter.shapes;
      this.colors = data.filter.colors;
      this.types = data.filter.types;
      this.habitats = data.filter.habitats;
      if (this.isFilter) {
        this.filterName = data.result;
      }
      this.results = [];
      this.nextUrl = '';
      this.currentIdx = 0;
      this.loadData();
    }
  }
}
