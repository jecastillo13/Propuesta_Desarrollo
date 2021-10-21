import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {HttpClientModule} from '@angular/common/http' ;
import {CityService} from '../app/Services/city.service';
import { HomeComponent } from './home/home.component';
import { AddclientComponent } from './client/addclient/addclient.component';
import { ListarclientComponent } from './client/listarclient/listarclient.component';
import { CreateclientComponent } from './client/createclient/createclient.component'

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    HomeComponent,
    AddclientComponent,
    ListarclientComponent,
    CreateclientComponent
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
