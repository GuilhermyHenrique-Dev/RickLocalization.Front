import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';

import { ModulesComponents } from '../modules/modules-components'

import { HomeComponent } from "../views/home/home.component";
import { DetailsComponent } from "../views/details/details.component"

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        ModulesComponents
    ],
    exports: [
        HomeComponent,
        DetailsComponent
    ]
})

export class ModulesViews { }