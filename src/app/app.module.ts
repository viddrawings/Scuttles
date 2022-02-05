import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "./material-module";
import {CommonModule} from "@angular/common";
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { BetsComponent } from './components/bets/bets.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    BetsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
