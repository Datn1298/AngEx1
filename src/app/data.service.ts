import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { retry, catchError, tap } from 'rxjs/operators';
import { Costing } from './costing';
import { TotalCost } from './total-cost';
import { ServicesBreakdown } from './services-breakdown';
import { ReservationCoverage } from './reservation-coverage';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private httpClient: HttpClient) { }


  public sendGetRequestTotalCostUrl(url: string){
    return this.httpClient.get<TotalCost[]>(url, {  params: new HttpParams(), observe: "response"});
  }

  public sendGetRequestServicesBreakdownUrl(url: string){
    return this.httpClient.get<ServicesBreakdown[]>(url, {  params: new HttpParams(), observe: "response"});
  }

  public sendGetRequestReservationCoverageUrl(url: string){
    return this.httpClient.get<ReservationCoverage[]>(url, {  params: new HttpParams(), observe: "response"});
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
