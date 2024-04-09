import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { ViewAppointmentListComponent } from './view-appointment-list/view-appointment-list.component';
import { ViewVisitHistoryComponent } from './view-visit-history/view-visit-history.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { MedicalFormComponent } from './medical-form/medical-form.component';
import { DentalFormComponent } from './dental-form/dental-form.component';
import { AvailableSchedComponent } from './available-sched/available-sched.component';
import { AccountDeleteComponent } from './account-delete/account-delete.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { LoginAsComponent } from './login-as/login-as.component';
import { ViewStudAppointmentComponent } from './view-stud-appointment/view-stud-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { UpdateStudentRecordComponent } from './update-student-record/update-student-record.component';
import { ViewListAdminComponent } from './view-list-admin/view-list-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentLoginComponent,
    MainPageComponent,
    AdminLoginComponent,
    StudentSignupComponent,
    CreateStaffComponent,
    ViewAppointmentListComponent,
    ViewVisitHistoryComponent,
    StudentDashboardComponent,
    AdminDashboardComponent,
    StaffDashboardComponent,
    MedicalFormComponent,
    DentalFormComponent,
    AvailableSchedComponent,
    AccountDeleteComponent,
    AccountSettingsComponent,
    StaffLoginComponent,
    LoginAsComponent,
    ViewStudAppointmentComponent,
    UpdateAppointmentComponent,
    UpdateStudentRecordComponent,
    ViewListAdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
