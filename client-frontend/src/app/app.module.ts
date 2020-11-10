import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationDetailsComponent } from './components/reservation-details/reservation-details.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { RoomsListComponent } from './components/rooms-list/rooms-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationDetailsComponent,
    ReservationListComponent,
    RoomsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
