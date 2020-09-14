import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';
import { HuongdanthueComponent } from './COMPONENT/UNCHANGED/MENU/huongdanthue/huongdanthue.component';
import { NaptheComponent } from './COMPONENT/UNCHANGED/MENU/napthe/napthe.component';
import { BaivietComponent } from './COMPONENT/UNCHANGED/MENU/baiviet/baiviet.component';
import { LichsuComponent } from './COMPONENT/UNCHANGED/MENU/lichsu/lichsu.component';
import { PageNotFoundComponent } from './COMPONENT/UNCHANGED/page-not-found/page-not-found.component';
import { LoginComponent } from './COMPONENT/UNCHANGED/MENU/login/login.component';
import { RegisterComponent } from './COMPONENT/UNCHANGED/MENU/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LichsuComponent,
    BaivietComponent,
    NaptheComponent,
    HuongdanthueComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
