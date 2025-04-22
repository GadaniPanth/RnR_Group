import { InquirePageComponent } from './inquire-page/inquire-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { title } from 'process';
import { SofitelDetailPageComponent } from './sofitel-detail-page/sofitel-detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SaffronDetailPageComponent } from './saffron-detail-page/saffron-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { ChannelPartnerPageComponent } from './channel-partner-page/channel-partner-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      title: 'R & R Group | Home | And our group is a team of experienced professionals who are dedicated to providing their clients with the best possible service.',
      description: 'R & R Group | Home | And our group is a team of experienced professionals who are dedicated to providing their clients with the best possible service.'
    }
  },
  {
    path: 'sofitel',
    component: SofitelDetailPageComponent,
    data: {
      title: 'Rehvassa Sofitel | 4 BHK SPACE DRIVEN LUXURY | Sargasan, Gandhinagar',
      description: 'Rehvassa Sofitel | 4 BHK SPACE DRIVEN LUXURY | Sargasan, Gandhinagar'
    }
  },
  {
    path: 'saffron',
    component: SaffronDetailPageComponent,
    data: {
      title: 'REHVASSA SAFFRON | 2 & 3 BHK Elite Lavish Living | Nana Chiloda, Ahmedabad',
      description: 'REHVASSA SAFFRON | 2 & 3 BHK Elite Lavish Living | Nana Chiloda, Ahmedabad'
    }
  },
  {
    path: 'inquiry',
    component: InquirePageComponent,
    data: {
      title: 'R & R Group | Inquiry',
      description: 'R & R Group | Inquiry'
    }
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    data: {
      title: 'R & R Group | Contact us | Feel free to get in touch',
      description: 'R & R Group | Contact us | Feel free to get in touch'
    }
  },
  {
    path: 'about',
    component: AboutPageComponent,
    data: {
      title: 'R & R Group | About Us | the group with a vision to develop high-quality, affordable commercial and residential properties',
      description: 'R & R Group | About Us | the group with a vision to develop high-quality, affordable commercial and residential properties'
    }
  },
  {
    path: 'career',
    component: CareerPageComponent,
    data: {
      title: "R & R Group | Career | Join us as we work towards our vision, making impactful changes in the real estate landscape and beyond. Together, let's shape a better tomorrow.",
      description: "R & R Group | Career | Join us as we work towards our vision, making impactful changes in the real estate landscape and beyond. Together, let's shape a better tomorrow."
    }
  },
  {
    path: 'channelpartner',
    component: ChannelPartnerPageComponent,
    data: {
      title: 'R & R Group | Channel Partner',
      description: 'R & R Group | Channel Partner'
    }
  },
  {
    path: 'projects',
    component: ProjectPageComponent,
    data: {
      title: 'R & R Group | Projects',
      description: 'R & R Group | Projects'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
