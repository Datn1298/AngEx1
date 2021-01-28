import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ReservationCoverage } from '../reservation-coverage';


@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  constructor() { }

  ReservationCoverage : ReservationCoverage[]=[];

  ngOnInit(): void {
    this.ReservationCoverage = AppComponent.ReservationCoverage;
  }

}
