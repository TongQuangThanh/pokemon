import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WikiPage } from './wiki';
import { WikiPageRoutingModule } from './wiki-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FilterComponent } from './filter/filter';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    WikiPageRoutingModule
  ],
  declarations: [WikiPage, PokemonComponent, FilterComponent],
  entryComponents: [],
  bootstrap: [WikiPage],
})
export class WikiModule {}
