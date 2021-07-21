import { Component, OnInit } from '@angular/core';
import { customers } from '../customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers = customers;

  constructor() { }

  ngOnInit(): void {
  }

}
