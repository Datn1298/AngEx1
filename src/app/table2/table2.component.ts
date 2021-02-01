import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ReservationCoverage } from '../reservation-coverage';
import {Sort} from '@angular/material/sort';


@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  public static ReservationCoverage : ReservationCoverage[]=[];
  ReservationCoverage : ReservationCoverage[]=[];

  ngOnInit(): void {
    this.ReservationCoverage = AppComponent.ReservationCoverage;
    Table2Component.ReservationCoverage = this.ReservationCoverage;
  }

  constructor() {
    this.ReservationCoverage = this.ReservationCoverage.slice();
  }

  sortData(sort: Sort) {
    const data = this.ReservationCoverage.slice();
    if (!sort.active || sort.direction === '') {
      this.ReservationCoverage = data;
      return;
    }

    this.ReservationCoverage = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'onDemandHours':{
          return compare(a.onDemandHours, b.onDemandHours, isAsc);
        }
        case 'reservedHours':{
          return compare(a.reservedHours, b.reservedHours, isAsc);
        }

        default: return 0;
      }
    });

    Table2Component.ReservationCoverage = this.ReservationCoverage;
  }
}

  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

