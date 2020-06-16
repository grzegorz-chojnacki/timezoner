import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TimezoneButtonComponent } from './timezone-button/timezone-button.component';
import { InMilisecondsPipe } from './clock/in-miliseconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimezoneButtonComponent,
    InMilisecondsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
