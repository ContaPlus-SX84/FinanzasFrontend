import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalculatorComponent, CustomDatePipe} from "./calculator.component";
import {MatLegacyRadioModule} from "@angular/material/legacy-radio";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from "@angular/material/grid-list";
import {NavbarComponent} from "../navbar/navbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {SaveDialogComponent} from "./save-dialog/save-dialog.component";
import { MatDialogModule } from '@angular/material/dialog';

const calculatorRoutes: Route[] = [
  {
    path: '',
    component: CalculatorComponent
  }
]

@NgModule({
  declarations: [
    NavbarComponent,
    CalculatorComponent,
    CustomDatePipe,
    SaveDialogComponent
  ],
  imports: [
    RouterModule.forChild(calculatorRoutes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
    MatLegacyRadioModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatDialogModule
  ],

  exports: [
  ]
})

export class CalculatorModule
{
}
