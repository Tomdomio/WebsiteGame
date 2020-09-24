import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NaptheComponent } from './COMPONENT/UNCHANGED/MENU/napthe/napthe.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';
import { HuongdanthueComponent } from './COMPONENT/UNCHANGED/MENU/huongdanthue/huongdanthue.component';
import { BaivietComponent } from './COMPONENT/UNCHANGED/MENU/baiviet/baiviet.component';
import { LichsuComponent } from './COMPONENT/UNCHANGED/MENU/lichsu/lichsu.component';
import { RegisterComponent } from './COMPONENT/UNCHANGED/MENU/register/register.component';
import { LoginComponent } from './COMPONENT/UNCHANGED/MENU/login/login.component';


const routesConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
//Menu
  {path:'', loadChildren:() => import('./COMPONENT/CHANGE/home/home.module').then(m => m.HomeModule)},
  {path:'napthe', component: NaptheComponent},
  {path:'huongdanthue', component: HuongdanthueComponent},
  {path:'baiviet', component: BaivietComponent},
  {path:'lichsu', component: LichsuComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
//Product
  {path:'product', loadChildren:() => import('./COMPONENT/CHANGE/product/product.module').then(m => m.ProductModule)},
//NotFound
  {path:'**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [],
  imports:[
    CommonModule,
    RouterModule.forRoot(routesConfig)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
