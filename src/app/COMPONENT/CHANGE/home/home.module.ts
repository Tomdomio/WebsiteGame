import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UCPubgComponent } from './dichvu/ucpubg/ucpubg.component';
import { QuanHuyLQMBComponent } from './dichvu/quan-huy-lqmb/quan-huy-lqmb.component';
import { HomeComponent } from './home.component';


const routesConfig: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'ucpubg', component:  UCPubgComponent },
  { path: 'qhlqmb', component: QuanHuyLQMBComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    UCPubgComponent,
    QuanHuyLQMBComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesConfig)
  ],
})
export class HomeModule { }
