import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { GamePage } from '../game/game.page';
import { WikiPage } from '../wiki/wiki';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'game',
        children: [
          {
            path: '',
            component: GamePage,
          }
        ]
      },
      {
        path: 'wiki',
        children: [
          {
            path: '',
            component: WikiPage,
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/tabs/game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

