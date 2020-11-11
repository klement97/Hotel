import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  rooms: any;
  checkIn: Date;
  checkOut: Date;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  // The search function will run once the search button is clicked, and will access all of the data in the rooms DB.
  search() {
    this.http.get('http://localhost:3000/rooms').subscribe((response) => {
      this.rooms = response;
    })
    console.log(this.checkIn);
    console.log(this.checkOut);
    
  }

  reserve() {
    console.log(this.checkIn);
    console.log(this.checkOut);
  }

}
