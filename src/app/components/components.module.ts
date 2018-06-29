import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';

import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { ModalsComponent } from './modals/modals.component';
import { TypographyComponent } from './css/typography/typography.component';
import { IconsComponent } from './css/icons/icons.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridComponent } from './css/grid/grid.component';
import { MediaObjectComponent } from './css/media-object/media-object.component';
import { UtilitiesComponent } from './css/utilities/utilities.component';
import { ImagesComponent } from './css/images/images.component';
import { ColorsComponent } from './css/colors/colors.component';
import { ShadowComponent } from './css/shadow/shadow.component';
import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import { PlayerServerStatsComponent } from './player-server-stats/player-server-stats.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CalendarModule.forRoot()
  ],
  declarations: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    StatsCardComponent,
    DashboardComponent,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    Profile1Component,
    HelpComponent,
    NotFoundComponent,
    PlayerServerStatsComponent

  ],
  exports: [
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    TypographyComponent,
    IconsComponent,
    Map1Component,
    StatsCardComponent,
    DashboardComponent,
    GridComponent,
    MediaObjectComponent,
    UtilitiesComponent,
    ImagesComponent,
    ColorsComponent,
    ShadowComponent,
    NotFoundComponent,
    PlayerServerStatsComponent

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ComponentsModule { }
