import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
