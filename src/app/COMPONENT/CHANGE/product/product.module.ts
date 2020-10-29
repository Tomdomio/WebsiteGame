import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routesConfig: Routes = [
  {path:'product/:id', component:ProductComponent},

  { path:'detail/:id', component: DetailComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routesConfig),
  ],
})
export class ProductModule {}
