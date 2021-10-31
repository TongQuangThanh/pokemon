import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WikiPage } from './wiki';
import { AboutPageRoutingModule } from './wiki-routing.module';
import { PokemonComponent } from './pokemon/pokemon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbModule,
    AboutPageRoutingModule
  ],
  declarations: [WikiPage, PokemonComponent],
  entryComponents: [],
  bootstrap: [WikiPage],
})
export class WikiModule {}
