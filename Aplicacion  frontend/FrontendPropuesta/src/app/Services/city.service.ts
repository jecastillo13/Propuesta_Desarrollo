import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CityComponent } from '../city/city.component';
import { City } from '../Model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private url = 'http://localhost:8080/city/api'

  constructor(private http:HttpClient) {

    }

    getCity(): Observable<City[]>{
      console.log(City)
      return this.http.get<City[]>(`${this.url}`);
    }

   }
