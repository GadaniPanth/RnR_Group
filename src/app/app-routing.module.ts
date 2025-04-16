import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { title } from 'process';
import { SofitelDetailPageComponent } from './sofitel-detail-page/sofitel-detail-page.component';


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
    path: 'sofitel',
    component: SofitelDetailPageComponent,
    data: {title: 'Rehvassa Sofitel'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
