import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsComponent } from './views/details/details.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavigationHistoryComponent } from './views/navigation-history/navigation-history.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'historiconavegacao', component: NavigationHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
