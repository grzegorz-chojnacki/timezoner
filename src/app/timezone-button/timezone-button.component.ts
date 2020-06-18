import { Component, OnInit, Input } from '@angular/core';
import { ClockComponent } from '../clock/clock.component';

@Component({
  selector: 'app-timezone-button',
  templateUrl: './timezone-button.component.html',
  styleUrls: ['./timezone-button.component.css']
})
export class TimezoneButtonComponent implements OnInit {
  @Input() timezone: string;
  @Input() clock: ClockComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setTimezone(): void {
    this.clock.changeTimezone(this.timezone);
  }

}
