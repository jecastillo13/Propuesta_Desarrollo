import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './City/add/add.component';
import { EditarComponent } from './City/editar/editar.component';
import { ListarComponent } from './City/listar/listar.component';
import { AddclientComponent } from './Client/addclient/addclient.component';
import { EditarclientComponent } from './Client/editarclient/editarclient.component';
import { ListarclientComponent } from './Client/listarclient/listarclient.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = 
[
  {path: 'listarcity', component:ListarComponent},
  {path: 'addcity', component: AddComponent},
  {path: 'editarcity', component: EditarComponent},

  {path: 'listarclient', component:ListarclientComponent},
  {path: 'addclient', component: AddclientComponent},
  {path: 'editarclient', component: EditarclientComponent},

  {path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
