import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private baseUrl = 'http://ergast.com/api/f1/driverStandings/1.json?limit=300'

  constructor(private httpClient: HttpClient) { }

  getDrivers() {
    return this.httpClient.get(this.baseUrl)
  }
}
