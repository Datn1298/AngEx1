import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { Table1Component } from './table1/table1.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { Table2Component } from './table2/table2.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { MatCardModule } from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartComponent,
    Table1Component,
    BarChartComponent,
    Table2Component,
    TotalCostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    ScrollingModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
