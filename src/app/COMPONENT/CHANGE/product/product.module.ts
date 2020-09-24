import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product.component';

const routesConfig: Routes = [
  {path:'detail', component: DetailComponent},
  {path:'product', component: ProductComponent}
];

@NgModule({
  declarations: [
    DetailComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig),
  ],
})
export class ProductModule { }
