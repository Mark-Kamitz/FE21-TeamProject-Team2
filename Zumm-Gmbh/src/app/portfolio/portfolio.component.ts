
import { Component, OnInit } from '@angular/core';
import { projects } from '../portfolio';
 

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
dataisotope  = ' { "itemSelector": ".grid-item", "layoutMode": "fitRows" } ';
products = projects

start = ""
elem = document.querySelector('.grid');


  constructor() {
    
   }

  refresh(): void {
    window.location.reload();
  } 
  
  
  ngOnInit(): void {

  }

}

