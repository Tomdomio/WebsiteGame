import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { UCPubgComponent } from './dichvu/ucpubg/ucpubg.component';
import { QuanHuyLQMBComponent } from './dichvu/quan-huy-lqmb/quan-huy-lqmb.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    UCPubgComponent,
    QuanHuyLQMBComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
