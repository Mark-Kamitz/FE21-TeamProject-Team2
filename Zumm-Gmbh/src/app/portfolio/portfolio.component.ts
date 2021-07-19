import { Component, OnInit } from '@angular/core';
import { projects } from '../portfolio';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
products = projects
  constructor() { }

  ngOnInit(): void {
  }

}
