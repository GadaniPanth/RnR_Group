import { InquirePageComponent } from './inquire-page/inquire-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { title } from 'process';
import { SofitelDetailPageComponent } from './sofitel-detail-page/sofitel-detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SaffronDetailPageComponent } from './saffron-detail-page/saffron-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [
  // {
  // path: '',
  // component: AppComponent,
  // data: {title: 'R&R Group'},
  // children: [
  //   {
  //     path:'/a',
  //   },
  //   {
  //     path:'/b',
  //   }
  // ]
  // }
  {
    path: '',
    component: HomePageComponent,
    data: { title: 'R&R Groups' }
  },
  {
    path: 'sofitel',
    component: SofitelDetailPageComponent,
    data: { title: 'Rehvassa Sofitel' }
  },
  {
    path: 'saffron',
    component: SaffronDetailPageComponent,
    data: { title: 'Rehvassa Saffron' }
  },
  {
    path: 'inquiry',
    component: InquirePageComponent,
    data: { title: 'Rehvassa Saffron/inquiry-form' }
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: { title: 'Rehvassa Saffron/Contact us' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
