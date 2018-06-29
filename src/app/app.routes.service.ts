
import { Map1Component } from './components/maps/map1/map1.component';
import { ModalsComponent } from './components/modals/modals.component';
import { BasicTableComponent } from './components/tables/basic-table/basic-table.component';
import { Profile1Component } from './components/profile/profile1/profile1.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerServerStatsComponent } from './components/player-server-stats/player-server-stats.component';


const routes: Route[] = [
  { 
    path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { 
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'status',
    component: PlayerServerStatsComponent
  },
  { path: 'profiles', children:
    [
      { path: 'profile1', component: Profile1Component },
    ]
  },
  { path: 'tables', children:
    [
      { path: 'table1', component: BasicTableComponent },
    ]
  },
  { path: 'maps', children:
    [
      { path: 'map1', component: Map1Component},
    ]
  },

  { path: 'modals', component: ModalsComponent},
  { path: '**', component: NotFoundComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
