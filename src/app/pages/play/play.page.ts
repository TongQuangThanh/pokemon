import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon, storageKey } from '../../models/model';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.page.html',
  styleUrls: ['./play.page.scss'],
})
export class PlayPage implements OnInit {
  player1: Pokemon[] = [];
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  constructor(private storageService: StorageService, public sharedService: SharedService) { }

  ngOnInit() {
    this.storageService.get(storageKey.player1).then(
      data => this.player1 = data,
      error => console.log(error)
    );
  }

}
