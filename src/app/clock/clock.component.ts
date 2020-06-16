import { Component, OnInit } from '@angular/core';
import { WorldTimeApi } from "../../services/world-time-api.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {
  timezone: string = "Europe/Warsaw"
  offset: number
  unixtime: number

  constructor(private api: WorldTimeApi) { }

  // Set initial timezone and start clock
  ngOnInit(): void {
    this.changeTimezone(this.timezone)
    setInterval(() => { this.unixtime++ }, 1000)
  }

  // Change clock timezone and sync time with server
  public changeTimezone(timezone: string): void {
    this.api.getTimezoneInfo(timezone)
      .subscribe(data => {
        this.timezone = timezone
        this.unixtime = data['unixtime']
        this.offset = data['raw_offset'] - data['dst_offset']
        console.log(data);
      })
  }
}
