import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriversService } from 'src/app/drivers.service';
import { Result } from 'src/app/models';

@Component({
  selector: 'app-drivers-details',
  templateUrl: './drivers-details.component.html',
  styleUrls: ['./drivers-details.component.scss']
})
export class DriversDetailsComponent implements OnInit {
  raceResult: Result;
  season: number;

  isDataLoaded = false;

  constructor(private driversService: DriversService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.season = parseInt(this.activatedRoute.snapshot.params['id']);

    this.driversService.getDriversForSeason(this.season).subscribe((response: any) => {
      const races = response.MRData.RaceTable.Races

      this.raceResult = {
        races
      }

      this.isDataLoaded = true;
    })
  }

}
