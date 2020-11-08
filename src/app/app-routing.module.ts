import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductModule } from './COMPONENT/CHANGE/product/product.module';
import { HomeModule } from './COMPONENT/CHANGE/home/home.module';

import { NaptheComponent } from './COMPONENT/UNCHANGED/MENU/napthe/napthe.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';
import { HuongdanmuaComponent } from './COMPONENT/UNCHANGED/MENU/huongdanmua/huongdanmua.component';
import { BaivietComponent } from './COMPONENT/UNCHANGED/MENU/baiviet/baiviet.component';
import { LichsuComponent } from './COMPONENT/UNCHANGED/MENU/lichsu/lichsu.component';
import { RegisterComponent } from './COMPONENT/UNCHANGED/MENU/register/register.component';
import { LoginComponent } from './COMPONENT/UNCHANGED/MENU/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { ThedanapComponent } from './COMPONENT/UNCHANGED/Menu/lichsu/thedanap/thedanap.component';


const routesConfig: Routes = [
//Menu
  {path:'home', loadChildren:() => import('./COMPONENT/CHANGE/home/home.module').then(m => m.HomeModule)},
  {path:'napthe', component: NaptheComponent},
  {path:'huongdanmua', component: HuongdanmuaComponent},
  {path:'baiviet', component: BaivietComponent},
  {path:'lichsu/:id', component: LichsuComponent},
  {path:'thedanap/:id', component: ThedanapComponent},
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
    BrowserModule,
    HomeModule,
    ProductModule,
    RouterModule.forRoot(routesConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
