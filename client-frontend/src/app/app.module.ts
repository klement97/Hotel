import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailsComponent,
    ReservationListComponent,
    RoomsListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
