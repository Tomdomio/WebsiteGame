import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './COMPONENT/UNCHANGED/footer/footer.component';
import { HeaderComponent } from './COMPONENT/UNCHANGED/header/header.component';
import { HomeComponent } from './COMPONENT/CHANGE/home/home.component';
import { NaptheComponent } from './menu/napthe/napthe.component';
import { BaivietComponent } from './menu/baiviet/baiviet.component';
import { LichsuComponent } from './menu/lichsu/lichsu.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NaptheComponent,
    BaivietComponent,
    LichsuComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
