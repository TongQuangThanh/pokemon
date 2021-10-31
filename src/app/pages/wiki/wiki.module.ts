import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { WikiPage } from './wiki';
import { AboutPageRoutingModule } from './wiki-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPageRoutingModule
  ],
  declarations: [WikiPage],
  entryComponents: [],
  bootstrap: [WikiPage],
})
export class WikiModule {}
