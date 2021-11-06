import { Responds, PokemonReference, NameUrl, PokemonSpeciesDetail, filters, baseUrls } from './../../../models/model';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PokemonService } from '../../../services/pokemon.service';
import { LoadingService } from './../../../services/loading.service';

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
  styleUrls: ['./filter.scss'],
})
export class FilterComponent implements OnInit {
  filters = filters;
  isFilter = false;
  loading: any;
  habitats = [];
  shapes = [];
  colors = [];
  growthRates = [];
  genders = [];
  types = [];
  @Input() selectedHabitat: NameUrl[];
  @Input() selectedShape: NameUrl[];
  @Input() selectedColor: NameUrl[];
  @Input() selectedGrowthRate: NameUrl[];
  @Input() selectedGender: NameUrl[];
  @Input() selectedType: NameUrl[];
  colorAll = false;
  typeAll = false;
  habitatAll = false;
  growthAll = false;
  shapeAll = false;
  genderAll = false;
  results = [];

  constructor(public modalCtrl: ModalController, private pokemonService: PokemonService,
              public navParams: NavParams, private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.showLoading();
    for (const it of filters) {
      this.pokemonService.getDataByString(it).subscribe((data: Responds) => {
        if (it === 'gender') {
          this.genders = data.results;
          this.addChecked(this.genders, this.selectedGender);
        } else if (it === 'growth-rate') {
          this.growthRates = data.results;
          this.addChecked(this.growthRates, this.selectedGrowthRate);
        } else if (it === 'pokemon-habitat') {
          this.habitats = data.results;
          this.addChecked(this.habitats, this.selectedHabitat);
        } else if (it === 'type') {
          this.types = data.results;
          this.addChecked(this.types, this.selectedType);
        } else if (it === 'pokemon-color') {
          this.colors = data.results;
          this.addChecked(this.colors, this.selectedColor);
        } else if (it === 'pokemon-shape') {
          this.shapes = data.results;
          this.addChecked(this.shapes, this.selectedShape);
        }
        if (this.genders.length > 0 && this.growthRates.length > 0 && this.types.length > 0
          && this.colors.length > 0 && this.shapes.length > 0 && this.habitats.length > 0) {
          this.loadingService.hideLoading();
        }
      });
    }
  }

  addChecked(array: any[], selected: NameUrl[] = []) {
    const names = selected.map(it => it.name);
    for (const item of array) {
      item.checked = names.includes(item.name);
    }
  }

  getId(url: string) {
    const stringId = url.replace(`${baseUrls}/`, '').replace('pokemon-species/', '').replace('pokemon/', '');
    return parseInt(stringId, 10);
  }

  async addToArray(promise: Promise<any>[]) {
    let filter = [];
    const values = await Promise.all(promise);
    for (const item of values) {
      let names = [];
      if (item.pokemon && item.pokemon.length > 0) {
        names = item.pokemon.map((it: PokemonReference) => this.getId(it.pokemon.url));
      } else if (item.pokemon_species && item.pokemon_species.length > 0) {
        names = item.pokemon_species.map((it: NameUrl) => this.getId(it.url));
      } else if (item.pokemon_species_details && item.pokemon_species_details.length > 0) {
        names = item.pokemon_species_details.map((it: PokemonSpeciesDetail) => this.getId(it.pokemon_species.url));
      }
      filter = filter.concat(names);
    }
    return filter;
  }

  resetAll() {
    this.addChecked(this.colors);
    this.addChecked(this.genders);
    this.addChecked(this.shapes);
    this.addChecked(this.growthRates);
    this.addChecked(this.types);
    this.addChecked(this.habitats);
    this.isFilter = false;
  }

  check(ele: any, array: any[], allStatus: boolean) {
    ele.checked = !ele.checked;
    this.isChecked(array, allStatus);
  }

  isChecked(array: any[], allStatus: boolean) {
    allStatus = array.every(it => it.checked);
    this.isFilter = array.some(it => it.checked);
  }

  toggleAll(array: any[], allStatus: boolean) {
    for (const it of array) {
      it.checked = !allStatus;
    }
  }

  async applyFilters() {
    this.loadingService.showLoading();
    const genders = this.genders.filter(it => it.checked);
    const growths = this.growthRates.filter(it => it.checked);
    const shapes = this.shapes.filter(it => it.checked);
    const colors = this.colors.filter(it => it.checked);
    const types = this.types.filter(it => it.checked);
    const habitats = this.habitats.filter(it => it.checked);
    const promise = [];
    const all = shapes.concat(types).concat(genders).concat(growths).concat(colors).concat(habitats);
    for (const it of all) {
      promise.push(this.pokemonService.getDataByUrl(it.url).toPromise());
    }
    const names = await this.addToArray(promise);
    this.results = [...new Set(names)];
    this.modalCtrl.dismiss({
      isFilter: this.isFilter, result: this.results, filter: {
        genders, growths, shapes, colors, types, habitats
      }
    }).then(val => this.loadingService.hideLoading());
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
