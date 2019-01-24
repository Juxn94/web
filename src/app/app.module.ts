import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CatModule } from './cat/cat.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    CatModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
