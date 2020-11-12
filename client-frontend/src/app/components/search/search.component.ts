import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReservationService } from 'src/app/services/reservation.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rooms: any;
  checkIn: Date;
  checkOut: Date;


  constructor(
    private http: HttpClient,
    private reservationService: ReservationService
  ) {

  }


  ngOnInit() {
  }


  // The search function will run once the search button is clicked, and will access all of the data in the rooms DB.
  search() {
    this.http.get('http://localhost:3000/rooms').subscribe((response) => {
      this.rooms = response;
    });
    console.log(this.checkIn);
    console.log(this.checkOut);
  }


  reserve() {
    const roomNumber = 1;
    this.reservationService.reserve(roomNumber, this.checkIn, this.checkOut).subscribe(
      response => console.log(response)
    );
    console.log(this.checkIn);
    console.log(this.checkOut);
  }

}
