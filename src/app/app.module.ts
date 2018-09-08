import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { Title1Component } from './components/title1/title1.component';
import { Title2Component } from './components/title2/title2.component';

@NgModule({
  declarations: [
    AppComponent,
    Title1Component,
    Title2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
