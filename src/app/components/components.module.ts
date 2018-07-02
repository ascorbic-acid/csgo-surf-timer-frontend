import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';
import { MapTopComponent } from './maptop/maptop.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { HelpComponent } from './help/help.component';
import { PlayerServerStatsComponent } from './player-server-stats/player-server-stats.component';
import { TopPlayersPointsComponent } from './top-players-points/top-players-points.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  declarations: [
    FooterComponent,
    TypographyComponent,
    IconsComponent,
    MapTopComponent,
    StatsCardComponent,
    DashboardComponent,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    HelpComponent,
    NotFoundComponent,
    PlayerServerStatsComponent,
    TopPlayersPointsComponent

  ],
  exports: [
    FooterComponent,
    TypographyComponent,
    IconsComponent,
    MapTopComponent,
    StatsCardComponent,
    DashboardComponent,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    NotFoundComponent,
    PlayerServerStatsComponent,
    TopPlayersPointsComponent

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
