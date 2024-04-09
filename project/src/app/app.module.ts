import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudAppointmentsComponent } from './stud-appointments/stud-appointments.component';
import { StudDeleteUpdateAppointmentComponent } from './stud-delete-update-appointment/stud-delete-update-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    StudAppointmentsComponent,
    StudDeleteUpdateAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
