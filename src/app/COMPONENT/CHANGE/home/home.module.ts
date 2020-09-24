import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UCPubgComponent } from './dichvu/ucpubg/ucpubg.component';
import { QuanHuyLQMBComponent } from './dichvu/quan-huy-lqmb/quan-huy-lqmb.component';
import { HomeComponent } from './home.component';

const routesConfig: Routes = [
  {path:'home', component: HomeComponent},
  {path:'ucpubg', component: UCPubgComponent},
  {path:'qhlqmb', component: QuanHuyLQMBComponent},
];

@NgModule({
  declarations: [
    UCPubgComponent,
    QuanHuyLQMBComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routesConfig)
  ],
})
export class HomeModule { }
