import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { PlanEventComponent } from './plan-event/plan-event.component';
import { SendEventComponent } from './send-event/send-event.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'planEvent', component: PlanEventComponent},
  { path: 'sendEvent', component: SendEventComponent},
  { path: 'event/:id', component: ViewEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
