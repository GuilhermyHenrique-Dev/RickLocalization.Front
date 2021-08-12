import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';

import { ModulesComponents } from '../modules/modules-components';

import { HomeComponent } from "../views/home/home.component";
import { DashboardComponent } from "../views/dashboard/dashboard.component";
import { DetailsComponent } from "../views/details/details.component";
import { NavigationHistoryComponent } from "../views/navigation-history/navigation-history.component";


@NgModule({
    declarations: [
        HomeComponent,
        DashboardComponent,
        DetailsComponent,
        NavigationHistoryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        ModulesComponents,
    ],
    exports: [
        HomeComponent,
        DashboardComponent,
        DetailsComponent,
        NavigationHistoryComponent
    ]
})

export class ModulesViews { }