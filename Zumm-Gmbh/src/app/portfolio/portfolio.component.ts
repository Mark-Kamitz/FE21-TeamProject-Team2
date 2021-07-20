// external js: isotope.pkgd.js
import { Component, OnInit } from '@angular/core';
import { projects } from '../portfolio';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
dataisotope  = ' { "itemSelector": ".grid-item", "layoutMode": "fitRows" } ';
products = projects
start = ""

  constructor() { }
  refresh(): void {
    window.location.reload();
  } 
  ngOnInit(): void {
    
  }

}

