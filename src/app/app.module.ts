import { AppRoutingModule } from './app-routing.module';
import { DriversService } from './drivers.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { DriversDetailsComponent } from './components/drivers-details/drivers-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DriversListComponent,
    DriversDetailsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    TableModule
  ],
  providers: [DriversService],
  bootstrap: [AppComponent]
})
export class AppModule { }
