import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WorldTimeApi {
  url = 'http://worldtimeapi.org/api/timezone/'

  constructor(private http: HttpClient) {}

  getTimezoneInfo(timezone: string): Observable<any> {
    return this.http.get(this.url + timezone)
  }
}