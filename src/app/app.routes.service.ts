
import { MapTopComponent } from './components/maptop/maptop.component';
import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlayerServerStatsComponent } from './components/player-server-stats/player-server-stats.component';
import { TopPlayersPointsComponent } from './components/top-players-points/top-players-points.component';


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
  { 
    path: 'maptop', component: MapTopComponent
  },
  {
    path: 'topbypoints', component: TopPlayersPointsComponent
  },
  { path: '**', component: NotFoundComponent }

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
