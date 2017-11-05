import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroDetailLinkComponent } from './hero-detail-link.component'
import { HeroesComponent } from './heroes.component'
import { DashboardComponent } from './dashboard.component'
import { PageNotFoundComponent } from './page-not-found'

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroDetailLinkComponent,
    HeroesComponent,
    DashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*Defines AppModule, the root module that tells Angular how to assemble the application. */