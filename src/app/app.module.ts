import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { ToggleComponent } from './toggle/toggle.component';

import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MainComponent } from './components/main/main.component';
import { FiltersComponent } from './components/filters/filters.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleComponent,
    CustomButtonComponent,
    MainComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
