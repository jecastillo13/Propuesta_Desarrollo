import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {HttpClientModule} from '@angular/common/http' ;
import {CityService} from '../app/Services/city.service'

@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
