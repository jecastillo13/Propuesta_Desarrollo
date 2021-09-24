import { Component, OnInit } from '@angular/core';
import { City } from '../Model/city';
import { CityService } from '../Services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  citys!: City[];
  constructor(private cityService:CityService) { }


  ngOnInit(): void {
    this.cityService.getCity().subscribe((data: City[]) =>{
      this.citys = data;

    });
  }

}
