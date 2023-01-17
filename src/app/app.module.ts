import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BuilderModule } from '@builder.io/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BuilderModule.forRoot('a54c9ecf97f8469b9d9611d82580d299')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
