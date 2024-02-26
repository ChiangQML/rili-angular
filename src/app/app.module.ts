import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PlanEventComponent } from './plan-event/plan-event.component';
import { SendEventComponent } from './send-event/send-event.component';
import { ViewEventComponent } from './view-event/view-event.component';


import { RiliProxyService } from './server/rili-proxy.service';

import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HomePageComponent,
    PlanEventComponent,
    SendEventComponent,
    ViewEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [RiliProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
