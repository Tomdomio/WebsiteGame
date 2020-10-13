import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product.component';

const routesConfig: Routes = [
  {path:'product/:id',component:ProductComponent},

  { path:'detail/:id', component: DetailComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig),
  ],
})
export class ProductModule {}
