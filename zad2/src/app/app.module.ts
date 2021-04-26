import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { HeroesRecordComponent } from './heroes-record/heroes-record.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
