import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SaffronComponent } from './saffron/saffron.component';
// import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SaffronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
