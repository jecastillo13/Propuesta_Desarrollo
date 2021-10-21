import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Service/client.service';

import { FilterPipe } from 'src/app/pipes/filter.pipe';


@Component({
  selector: 'app-listarclient',
  templateUrl: './listarclient.component.html',
  styleUrls: ['./listarclient.component.css']
})
export class ListarclientComponent implements OnInit {

  client !: Client[];
  //filterPost !: FilterPipe ;
  filterPost ='';

  constructor(private clientService: ClientService) { }
 

  ngOnInit(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.client = data;
      
    });
  }


  
}
