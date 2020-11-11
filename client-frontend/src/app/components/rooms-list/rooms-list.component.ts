import { Component, OnInit } from '@angular/core';
import { RoomService } from 'src/app/services/room.service';


@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnInit {

  rooms: any;


  constructor(private roomService: RoomService) {

  }


  ngOnInit() {
    this.roomService.getRooms().subscribe((response) => {
      this.rooms = response;
    });
  }

}
