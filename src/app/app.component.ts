import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from './data.service';
import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { ServicesBreakdown } from './services-breakdown';
import { ReservationCoverage } from './reservation-coverage';
import { TotalCost } from './total-cost';
import { AccountService } from './_services/account.service';
import { User } from './_models/user';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({ selector: 'app', templateUrl: 'app.component.html' })


export class AppComponent implements OnInit, OnDestroy{
  isShow = false;
  private REST_TOTAL_COST_API_SERVER = 'http://localhost:3000/totalCost';
  private REST_RESERVATION_COVERAGE_API_SERVER = 'http://localhost:3000/ReservationCoverage';
  private REST_SERVICES_BREAKDOWN_API_SERVER = 'http://localhost:3000/servicesBreakdown';

  public static servicesBreakdown : ServicesBreakdown[]=[];
  servicesBreakdown : ServicesBreakdown[]=[]

  public static ReservationCoverage : ReservationCoverage[]=[];
  ReservationCoverage : ReservationCoverage[]=[]

  public static TotalCost : TotalCost[]=[];
  TotalCost : TotalCost[]=[]

  user: User;

  constructor(private accountService: AccountService, private dataService: DataService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }


  destroy$: Subject<boolean> = new Subject<boolean>();


  ngOnInit() {
    this.getServicesBreakdown();
    this.getReservationCoverage();
    this.getTotalCost();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getServicesBreakdown(){
    this.dataService.sendGetRequestServicesBreakdownUrl(this.REST_SERVICES_BREAKDOWN_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      this.servicesBreakdown = res.body;
      AppComponent.servicesBreakdown = this.servicesBreakdown;
    })
  }

  getReservationCoverage(){
    this.dataService.sendGetRequestReservationCoverageUrl(this.REST_RESERVATION_COVERAGE_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      this.ReservationCoverage = res.body;
      AppComponent.ReservationCoverage = this.ReservationCoverage;
    })
  }

  getTotalCost(){
    this.dataService.sendGetRequestTotalCostUrl(this.REST_TOTAL_COST_API_SERVER)
    .pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{
      this.TotalCost = res.body;
      AppComponent.TotalCost = this.TotalCost;
    })
  }


}

