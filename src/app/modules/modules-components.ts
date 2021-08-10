import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';

import { CardInfoComponent } from "../components/card-info/card-info.component";

@NgModule({
    declarations: [
        CardInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
    ],
    exports: [
        CardInfoComponent
    ]
})

export class ModulesComponents { }