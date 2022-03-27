import { WinnerResponse } from './../../models';
import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { DriversService } from 'src/app/drivers.service';
import { DriverResponse, Winner, Driver } from 'src/app/models';

enum SortingOptions {
  ASC = 'ASC',
  DESC = 'DESC'
}

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  winnersList: Winner[] = [];
  sortOption = SortingOptions.DESC

  constructor(private driversService: DriversService) { }

  sort(): void {
    const isSortOptionASC = this.sortOption === SortingOptions.ASC

    this.winnersList.sort((first: Winner, second: Winner) => (isSortOptionASC ? first.season - second.season : second.season - first.season))
    this.sortOption = isSortOptionASC ? SortingOptions.DESC : SortingOptions.ASC
  }

  ngOnInit(): void {
    this.driversService.winnerReponse.subscribe((winnerResponse: WinnerResponse) => {
      this.winnersList = winnerResponse.winners
    })
  }

}
