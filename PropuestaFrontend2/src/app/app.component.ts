import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FilterPipe } from './pipes/filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PropuestaFrontend2';


  constructor(private router: Router) { }


  ngOnInit(): void {
    this.router.navigate(["/home"])
  }
}

