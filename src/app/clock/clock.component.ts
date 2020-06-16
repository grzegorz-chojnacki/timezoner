import { Component, OnInit } from '@angular/core';
import { WorldTimeApi } from "../../services/world-time-api.service";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {
  timezone: string = "Europe/Warsaw"
  utc_offset: string
  unixtime: number

  constructor(private api: WorldTimeApi) { }

  ngOnInit(): void {
    this.changeTimezone(this.timezone)
    setInterval(() => {this.unixtime++}, 1000)
  }

  public changeTimezone(timezone: string): void {
    this.api.getTimezoneInfo(timezone)
      .subscribe(data => {
        this.timezone = timezone
        this.unixtime = data['unixtime']
        this.utc_offset = data['utc_offset']
      })
  }
}
