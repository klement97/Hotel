import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/reservations').subscribe((response) => {
      console.log(response);
    })
  }

}
