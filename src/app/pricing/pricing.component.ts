import { Component, OnInit } from '@angular/core';

export interface Specification {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  isHeading = true;

  displayedColumns: string[] = ['item', 'cost'];

  specifications: Specification[] = [
    {item: '1000mm Base unit', cost: 150},
    {item: '1000mm Base unit', cost: 130},
    {item: '600mm Built under', cost: 200},
    {item: '600mm Larder unit', cost: 300},
    {item: '500mm Wall unit', cost: 250},
    {item: '500mm Wall unit', cost: 135},
    {item: '1000mm Wall unit', cost: 205},
  ];

  constructor() { }

  getTotalCost() {
    return this.specifications.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
