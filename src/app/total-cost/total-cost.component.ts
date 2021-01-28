import { Component, OnInit } from '@angular/core';
import { TotalCost } from '../total-cost';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.css']
})
export class TotalCostComponent implements OnInit {

  constructor() { }

  TotalCost : TotalCost[]=[];


  ngOnInit(): void {
    this.TotalCost = AppComponent.TotalCost;
  }

}
