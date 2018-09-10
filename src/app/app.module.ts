import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { YaCoreModule }  from 'angular2-yandex-maps';
import { Title1Component } from './components/title1/title1.component';
import { Title2Component } from './components/title2/title2.component';
import { AboutBusiness1Component } from './components/about-business1/about-business1.component';
import { GiveWorkForProffsComponent } from './components/give-work-for-proffs/give-work-for-proffs.component';
import { Benefits2Component } from './components/benefits2/benefits2.component';
import { BenefitsComponent } from './components/benefits/benefits.component';

@NgModule({
  declarations: [
    AppComponent,
    Title1Component,
    Title2Component,
    AboutBusiness1Component,
    GiveWorkForProffsComponent,
    BenefitsComponent,
    Benefits2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    YaCoreModule.forRoot(),
    ScrollToModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
