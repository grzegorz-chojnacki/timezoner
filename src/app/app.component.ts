import { Component } from '@angular/core';
import { timezoneList } from './timezoneList'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'timezoner'
  timezones = timezoneList
}
