import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Inject HttpClient as a dependency
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationsURL = 'postgres://rzvpluvufnhwxn:392c9a5622ec268f75a3d76eadd45a206d13dfa39138ac531c687e6c56789509@ec2-52-71-85-210.compute-1.amazonaws.com:5432/dfh5t3jjlugdgu' //URL to database

  constructor(private http: HttpClient) { }

  // getReservations() {
  //   return this.http.get(this.reservationsURL);
  // }
  
}
