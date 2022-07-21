import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";

import {AppComponent} from './app.component';
import {CatsComponent} from './components/cats/cats.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {CatsService} from "./services/cats.service";
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
