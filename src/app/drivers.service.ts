import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriverResponse, Winner, Driver, WinnerResponse } from './models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  private baseUrl = 'http://ergast.com/api/f1'

  private winnerResponseSubject: Subject<WinnerResponse>;
  public winnerReponse: Observable<WinnerResponse>;

  constructor(private httpClient: HttpClient) {
    this.winnerResponseSubject = new Subject<WinnerResponse>();
    this.winnerReponse = this.winnerResponseSubject.asObservable();

    this.getWinners();
  }

  public getDriversForSeason(season: number) {
    return this.httpClient.get(`${this.baseUrl}/${season}/results.json?limit=300`)
  }

  private getWinners() {
    this.httpClient.get(`${this.baseUrl}/driverStandings/1.json?limit=300`)
      .subscribe((response: any) => {
        this.winnerResponseSubject.next({
          winners: this.handleItems(response.MRData.StandingsTable.StandingsLists)
        })
      })
  }

  private handleItems = (competitions: DriverResponse[]) => {
    const result: Winner[] = [];

    competitions.forEach((comp: DriverResponse) => {
      const season: number = parseInt(comp.season);
      const driver: Driver = comp.DriverStandings[0].Driver

      const isSeasonBetween2006and2020 = season <= 2020 && season >= 2006

      if (isSeasonBetween2006and2020) {
        result.push({
          season,
          driver
        })
      }

    })

    return result
  }
}
