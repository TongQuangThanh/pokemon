import { ModalController } from '@ionic/angular';
import { Pokemon } from './../../../models/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  images = [];
  slideOpts = {
    initialSlide: 0,
    autoplay: true,
    height: 100
  };
  constructor(private modalController: ModalController) { }

  ngOnInit() {
    for (const key in this.pokemon.sprites.other) {
      const imageLayer = this.pokemon.sprites.other[key];
      for (const key2 in imageLayer) {
        if (imageLayer[key2]) {
          this.images.push(imageLayer[key2]);
        }
      }
    }
    console.log(this.images);
    
  }

  dismissModal() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  prev() {

  }

  next() {

  }
}
