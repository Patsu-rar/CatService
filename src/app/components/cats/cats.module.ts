import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {EffectsModule} from "@ngrx/effects";

import {StoreModule} from "@ngrx/store";

import {catReducer} from "./state/cat.reducer";
import {CatEffect} from "./state/cat.effects";

import {CatComponent} from "./cat/cat.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSliderModule} from "@angular/material/slider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const catRoutes: Routes = [{path: "", component: CatComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(catRoutes),
    StoreModule.forFeature("cats", catReducer),
    EffectsModule.forFeature([CatEffect]),
    MatGridListModule,
    MatSliderModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CatComponent
  ]
})
export class CatsModule { }
