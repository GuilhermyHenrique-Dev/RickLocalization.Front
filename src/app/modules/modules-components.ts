import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatCardModule } from '@angular/material/card';

import { CardInfoComponent } from "../components/card-info/card-info.component";
import { ScannerComponent } from "../components/scanner/scanner.component";

@NgModule({
    declarations: [
        CardInfoComponent,
        ScannerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
    ],
    exports: [
        CardInfoComponent,
        ScannerComponent
    ]
})

export class ModulesComponents { }