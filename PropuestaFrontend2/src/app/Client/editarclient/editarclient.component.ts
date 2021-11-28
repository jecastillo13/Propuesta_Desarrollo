import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Service/client.service';


@Component({
  selector: 'app-editarclient',
  templateUrl: './editarclient.component.html',
  styleUrls: ['./editarclient.component.css']
})
export class EditarclientComponent implements OnInit {

  client: Client = new Client();

  constructor(private router: Router, private service: ClientService) { }

  ngOnInit(): void {
    
   this.Edit();
  }

  Edit() {
    let id_client = localStorage.getItem("id_client");

    this.service.getClientId(+'id').subscribe(data => {
      this.client = data;
    });

  }

  Update(client: Client) {
    this.service.updateClient(client)
      .subscribe(data => {
        this.client = data;
        alert("Se Actualizo con Exito!!!")
        this.router.navigate(["/listarclient"])
      })
  }
}
