import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../Model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = 'http://localhost:8080/cliente/api'


  constructor(private http: HttpClient) {

  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.url}`)
  }
  createClient(client: Client) {
    return this.http.post<Client>(this.url, client)
  }



}