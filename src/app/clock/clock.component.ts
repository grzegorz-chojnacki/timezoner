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
  timezone: string
  time: number
  isLoading: boolean // Loading spinner visibility flag
  longestTimezoneLength: number
  initialTimezone = timezoneList[0]

  constructor(private api: WorldTimeApi) { }

  // Set initial timezone and start clock
  ngOnInit(): void {
    this.changeTimezone(this.initialTimezone)
    this.longestTimezoneLength = timezoneList
      .map(timezone => timezone.length)
      .reduce((acc, length) => length > acc ? length : acc)

    setInterval(() => { this.time++ }, 1000)
  }

  // Change clock timezone and sync time with server
  public changeTimezone(timezone: string): void {
    // No need to fetch data for current timezone
    if (this.timezone == timezone) return

    this.isLoading = true
    this.api.getTimezoneInfo(timezone)
      .subscribe(
        data => {
          this.time = this.getTime(data)
          this.timezone = timezone
          this.isLoading = false
        })
  }

  // Get the unixtime offseted by timezones and DST
  getTime(data: Observable<any>): number {
    return data['unixtime'] + data['raw_offset'] + data['dst_offset']
  }
}
