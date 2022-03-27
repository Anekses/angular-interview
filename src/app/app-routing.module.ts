import { DriversDetailsComponent } from './components/drivers-details/drivers-details.component';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: DriversListComponent
    },
    {
        path: ':id',
        component: DriversDetailsComponent
    },
    {
        path: '**',
        component: DriversListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
