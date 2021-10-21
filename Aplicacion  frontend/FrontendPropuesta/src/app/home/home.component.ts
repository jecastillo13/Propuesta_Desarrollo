import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../Model/city';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }

 nextpage(){
   this.router.navigate(['city'])
 }
}
