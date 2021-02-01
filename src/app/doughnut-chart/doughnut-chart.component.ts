import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { AppComponent } from '../app.component';
import { ServicesBreakdown } from '../services-breakdown';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: [ './doughnut-chart.component.css' ]
})
export class DoughnutChartComponent  {
  // Doughnut
  servicesBreakdown : ServicesBreakdown[]=[];

  public doughnutChartLabels: Label[] = ['EC2', 'EFS', 'OTHER', 'S3', 'SUPPORT'];
  public doughnutChartData: MultiDataSet = [[, , , , ],];
  public doughnutChartType: ChartType = 'doughnut';

  public options: any = {
    responsive: true,
    legend:{
      display: false
    },
  };


  public doughnutChartColors: Array < any > = [
    {backgroundColor: ['blue', 'green', 'red', 'orange', 'yellow'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,90,205,1)', 'rgba(148,159,177,1)']
  }];

  constructor() { }

  ngOnInit() {
    this.servicesBreakdown = AppComponent.servicesBreakdown;
    this.setDataDoughnutChart();
  }

  setDataDoughnutChart(){
    let  dataNew: MultiDataSet= [
      [
        this.servicesBreakdown[0].EC2,
        this.servicesBreakdown[0].EFS,
        this.servicesBreakdown[0].OTHER,
        this.servicesBreakdown[0].S3,
        this.servicesBreakdown[0].SUPPORT,
      ]
    ];
    this.doughnutChartData = dataNew;
  }
}
