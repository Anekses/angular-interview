import { DriversService } from './drivers.service';
import { Component } from '@angular/core'
import { Driver, DriverResponse, Winner } from './models';
import { Subject, takeUntil } from 'rxjs';

enum SortingOptions {
  ASC = 'ASC',
  DESC = 'DESC'
}

const handleItems = (competitions: DriverResponse[]) => {
  const result: Winner[] = [];
  // below create code to manipulate items
  // to get required number of items in requested order


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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private destroy$ = new Subject<boolean>();

  title = 'Angular';
  winnersList: Winner[] = [];
  sortOption = SortingOptions.DESC

  constructor(private driversService: DriversService) { }

  sort(): void {
    const isSortOptionASC = this.sortOption === SortingOptions.ASC

    this.winnersList.sort((first: Winner, second: Winner) => (isSortOptionASC ? first.season - second.season : second.season - first.season))
    this.sortOption = isSortOptionASC ? SortingOptions.DESC : SortingOptions.ASC
  }

  ngOnInit(): void {
    this.driversService
      .getDrivers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(((response: any) => {
        this.winnersList = handleItems(response.MRData.StandingsTable.StandingsLists)
      }))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
