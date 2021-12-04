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
      // {
      //   path: 'speakers',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
      //     },
      //     {
      //       path: 'session/:sessionId',
      //       loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
      //     },
      //     {
      //       path: 'speaker-details/:speakerId',
      //       loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
      //     }
      //   ]
      // },
      // {
      //   path: 'map',
      //   children: [
      //     {
      //       path: '',
      //       loadChildren: () => import('../map/map.module').then(m => m.MapModule)
      //     }
      //   ]
      // },
      {
        path: 'wiki',
        children: [
          {
            path: '',
            component: WikiPage,
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/game',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

