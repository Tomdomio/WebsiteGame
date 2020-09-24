
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuanHuyLQMBComponent } from './dichvu/quan-huy-lqmb/quan-huy-lqmb.component';
import { UCPubgComponent } from './dichvu/ucpubg/ucpubg.component';
import { HomeComponent } from './home.component';


const routesConfig: Routes = [
    //file link của home module
  {path:'',component: HomeComponent},//link là localhost:4200/home 
  { path:'ucpubg',component: UCPubgComponent},//link là localhost:4200/home/details
  { path:'qhlqmb', component: QuanHuyLQMBComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesConfig)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }