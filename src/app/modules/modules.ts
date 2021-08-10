import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { HomeComponent } from "../views/home/home.component";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        HomeComponent
    ]
})

export class modules { }