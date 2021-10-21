import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Service/client.service';

@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private router: Router, private service: ClientService) { }

  client = new Client();
  submitted = false;
  msgError = '';

  ngOnInit(): void {
  }


  Guardar(client: Client) {
    this.service.createClient(client)
      .subscribe(data => {
        alert("Se agrego con exito el cliente..!!!");
        this.router.navigate(["listarclient"]);
      })
  }



  saveClient(): void {
    const data = { 
    id_client: this.client.id_client,
    name_client: this.client.name_client,
    addres: this.client.addres,
    number_telefone: this.client.number_telefone,
    code: this.client.code,
    imagen: this.client.imagen,
    tipo_cliente: this.client.tipo_cliente,
    time_Inactivity: this.client.time_Inactivity,
    floors: this.client.floors,
    office: this.client. office,
    name_building: this.client.name_building,
    city: this.client.city,
    code_sioval: this.client.code_sioval,
    code_sac: this.client.code_sac,
    nit: this.client.nit,
    Idcity: this.client.Idcity,
    Code_branchMti: this.client.Code_branchMti
  };

    this.service.createClient(data)
  .subscribe(
    response => {
      this.submitted = true;
      console.log(response);
    },
    error => {
      this.msgError = error.message + ' \n ' + error.error.message;
      console.log(error);
    });
      }

}
