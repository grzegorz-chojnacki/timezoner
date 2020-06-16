import { Component, OnInit } from '@angular/core';
import { WorldTimeApi } from '../../services/world-time-api.service';
import { timezoneList } from '../timezoneList'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {
  timezone: string = timezoneList[0]
  time: number

  constructor(private api: WorldTimeApi) { }

  // Set initial timezone and start clock
  ngOnInit(): void {
    this.changeTimezone(this.timezone)
    setInterval(() => { this.time++ }, 1000)
  }

  // Change clock timezone and sync time with server
  public changeTimezone(timezone: string): void {
    this.api.getTimezoneInfo(timezone)
      .subscribe(data => {
        this.timezone = timezone
        this.time = data['unixtime'] + data['raw_offset'] + data['dst_offset']
        console.log(data);
      })
  }
}
