import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { SlideComponent } from './COMPONENT/CHANGE/slide/slide.component';
import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';
import { ProductComponent } from './COMPONENT/CHANGE/product/product.component';
import { CategoriesComponent } from './COMPONENT/CHANGE/categories/categories.component';
import { DetailComponent } from './COMPONENT/CHANGE/product/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SlideComponent,
    HomeComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
