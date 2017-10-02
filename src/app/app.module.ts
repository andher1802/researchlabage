import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './src/app/nav-bar/nav-bar.component';
import { HomeContentComponent } from './src/app/home-content/home-content.component';

import { DropdownModule } from "ng2-dropdown";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
