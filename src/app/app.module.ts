import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SofitelDetailPageComponent } from './sofitel-detail-page/sofitel-detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SaffronDetailPageComponent } from './saffron-detail-page/saffron-detail-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { InquirePageComponent } from './inquire-page/inquire-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ChannelPartnerPageComponent } from './channel-partner-page/channel-partner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SofitelDetailPageComponent,
    HomePageComponent,
    SaffronDetailPageComponent,
    InquirePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    CareerPageComponent,
    ProjectPageComponent,
    ChannelPartnerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
