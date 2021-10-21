import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './City/listar/listar.component';
import { AddComponent } from './City/add/add.component';
import { EditarComponent } from './City/editar/editar.component';



import { ListarclientComponent } from './Client/listarclient/listarclient.component';
import { AddclientComponent } from './Client/addclient/addclient.component';
import { EditarclientComponent } from './Client/editarclient/editarclient.component';

import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditarComponent,
    ListarclientComponent,
    AddclientComponent,
    EditarclientComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
