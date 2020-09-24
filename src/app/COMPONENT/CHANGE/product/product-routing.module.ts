
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product.component';


const routesConfig: Routes = [
    //file link của home module
  {path:'product',component: ProductComponent},//link là localhost:4200/home 
  {path:'detail',component: DetailComponent},//link là localhost:4200/home/details
];

@NgModule({
  imports: [RouterModule.forChild(routesConfig)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }