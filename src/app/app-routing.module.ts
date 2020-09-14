import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';
import { NaptheComponent } from './COMPONENT/UNCHANGED/MENU/napthe/napthe.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';
import { HuongdanthueComponent } from './COMPONENT/UNCHANGED/MENU/huongdanthue/huongdanthue.component';
import { BaivietComponent } from './COMPONENT/UNCHANGED/MENU/baiviet/baiviet.component';
import { LichsuComponent } from './COMPONENT/UNCHANGED/MENU/lichsu/lichsu.component';


const routesConfig: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'napthe', component: NaptheComponent},
  {path:'huongdanthue', component: HuongdanthueComponent},
  {path:'baiviet', component: BaivietComponent},
  {path:'lichsu', component: LichsuComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routesConfig)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
