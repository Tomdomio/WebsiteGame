import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { ScrollingModule}  from '@angular/cdk/scrolling';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductComponent } from './product.component';
import { DetailComponent } from './detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MuaspComponent } from './muasp/muasp.component';


const routesConfig: Routes = [
  {path:'product/:id', component:ProductComponent},

  { path:'detail/:id', component: DetailComponent },

  { path:'muasp/:id', component: MuaspComponent }
];

@NgModule({
  declarations: [
    ProductComponent,
    DetailComponent,
    MuaspComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PaginatorModule,
    ScrollingModule,
    NgbModule,
    RouterModule.forChild(routesConfig),
  ],
})
export class ProductModule {}
