import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ReservationCoverage } from '../reservation-coverage';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent {

  reservationCoverage : ReservationCoverage[]=[]

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend:{
      display: false
    },
  };


  barChartLabels: Label[] = ['t2.medium', 't2.nano', 't2.targe', 'm4.targe', 't2.micro', 'm3.medium', 't2.small'];
  barChartType: ChartType = 'horizontalBar';
  barChartLegend = true;
  barChartPlugins = [];


  public barChartColors: Array<any> = [{
    backgroundColor: "red",
  }];

  public barChartData: ChartDataSets[] = [{
    data: [,,,,,,], label: "ON DEMAND HOURS"
  }];

  constructor() { }

  ngOnInit() {
    this.reservationCoverage = AppComponent.ReservationCoverage;
    console.log( this.reservationCoverage.length);
    this.setData();
  }

  setData(){
    let data2 = [{
      data: [this.reservationCoverage[0].onDemandHours,
      this.reservationCoverage[1].onDemandHours,
      this.reservationCoverage[2].onDemandHours,
      this.reservationCoverage[3].onDemandHours,
      this.reservationCoverage[4].onDemandHours,
      this.reservationCoverage[5].onDemandHours,
      this.reservationCoverage[6].onDemandHours,]
      , label: "ON DEMAND HOURS"
    }];

    this.barChartData = data2;
  }
}
