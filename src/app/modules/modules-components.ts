import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
        NgbModule
    ],
    exports: [
        CardInfoComponent
    ]
})

export class ModulesComponents { }