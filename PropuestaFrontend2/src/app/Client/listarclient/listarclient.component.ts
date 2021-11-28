import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Service/client.service';

import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { Router,ActivatedRoute, } from '@angular/router';



@Component({
  selector: 'app-listarclient',
  templateUrl: './listarclient.component.html',
  styleUrls: ['./listarclient.component.css']
})
export class ListarclientComponent implements OnInit {

  public client !: Client[];
  public page: number = 0;
  public search: string = '';
  public clients: Client = new Client();


 public clientSet!: Client[];
 public clientFil!: Client[];
 public idClient!: '';
 public currentClient = '';
 public currentIndex = -1;
 public collectionSize!: number;
 public searchTerm!: string;
 public closeModal!: string;
 public  msgError = '';

  constructor(private clientService: ClientService, private router: Router, private activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.client = data;

    });
  }

  nextPage() {
    this.page += 10;
  }

  pevPage() {
    if (this.page > 0) {
      this.page -= 10;
    }
  }

  onSearchCodigosioval(search: string) {
    //this.page=0;
    this.search = search;
  }
  Nuevo() {
    this.router.navigate(["/addclient"])
  }
  
 Delete(client: Client){
   this.clientService.deleteClient(client)
   .subscribe(data=>{
     this.client=this.client.filter(p=>p!==client);
     alert("Usuario eliminado...");
     
   })
  
 }
 Edit(client : Client) {
 localStorage.setItem("id",client.id_client.toString());

 console.log(client.id_client)
 this.router.navigate(["/editarclient"]);
 
}


}
