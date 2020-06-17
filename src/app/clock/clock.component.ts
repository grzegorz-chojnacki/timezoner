import { Component, OnInit } from '@angular/core';
import { WorldTimeApi } from '../../services/world-time-api.service';
import { timezoneList } from '../timezoneList'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {
  timezone: string = timezoneList[0]
  time: number
  isLoading: boolean; // Loading spinner visibility flag

  constructor(private api: WorldTimeApi) { }

  // Set initial timezone and start clock
  ngOnInit(): void {
    this.changeTimezone(this.timezone)
    setInterval(() => { this.time++ }, 1000)
  }

  // Change clock timezone and sync time with server
  public changeTimezone(timezone: string): void {
    this.isLoading = true
    this.api.getTimezoneInfo(timezone)
      .subscribe(
        data => {
          this.time = this.getTime(data)
          this.timezone = timezone
          this.isLoading = false
        },
        error => console.error(error)
      )
  }

  // Get the unixtime offseted by timezones and DST
  getTime(data: Observable<any>): number {
    return data['unixtime'] + data['raw_offset'] + data['dst_offset']
  }
}
