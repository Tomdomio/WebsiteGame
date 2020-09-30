import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UCPubgComponent } from './dichvu/ucpubg/ucpubg.component';
import { QuanHuyLQMBComponent } from './dichvu/quan-huy-lqmb/quan-huy-lqmb.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';



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
    CategoriesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ],
})
export class HomeModule { }
