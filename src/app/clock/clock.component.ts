import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})

export class ClockComponent implements OnInit {
  timezone: string = "Europe/Warsaw"
  utc_offset: string
  unixtime: number

  constructor() { }

  ngOnInit(): void {

  }

}
