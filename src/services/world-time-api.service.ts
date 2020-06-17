import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorldTimeApi {
  url = 'http://worldtimeapi.org/api/timezone/'

  constructor(private http: HttpClient) { }

  // Get JSON with time and timezone info from url
  getTimezoneInfo(timezone: string): Observable<any> {
    return this.http.get(this.url + timezone)
  }

}