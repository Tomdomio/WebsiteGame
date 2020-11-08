import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';
import { LoginComponent } from './COMPONENT/UNCHANGED/MENU/login/login.component';
import { NaptheComponent } from './COMPONENT/UNCHANGED/MENU/napthe/napthe.component';
import { RegisterComponent } from './COMPONENT/UNCHANGED/MENU/register/register.component';
import { LichsuComponent } from './COMPONENT/UNCHANGED/MENU/lichsu/lichsu.component';
import { ThedanapComponent } from './COMPONENT/UNCHANGED/Menu/lichsu/thedanap/thedanap.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LichsuComponent,
    LoginComponent,
    RegisterComponent,
    NaptheComponent,
    ThedanapComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
