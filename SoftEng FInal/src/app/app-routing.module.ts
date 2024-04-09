import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { DentalFormComponent } from './dental-form/dental-form.component';
import { MedicalFormComponent } from './medical-form/medical-form.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { AvailableSchedComponent } from './available-sched/available-sched.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { LoginAsComponent } from './login-as/login-as.component';
import { StaffLoginComponent } from './staff-login/staff-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { ViewStudAppointmentComponent } from './view-stud-appointment/view-stud-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { ViewVisitHistoryComponent } from './view-visit-history/view-visit-history.component';
import { ViewAppointmentListComponent } from './view-appointment-list/view-appointment-list.component';
import { UpdateStudentRecordComponent } from './update-student-record/update-student-record.component';
import { ViewListAdminComponent } from './view-list-admin/view-list-admin.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
   {path: 'main-page', component: MainPageComponent},
   {path: 'login-user', component: StudentLoginComponent},
   {path: 'login-staff', component: StaffLoginComponent},
   {path: 'login-admin', component: AdminLoginComponent},
   {path: 'signup-user', component: StudentSignupComponent},
   {path: 'student-dashboard', component: StudentDashboardComponent},
   {path: 'staff-dashboard', component: StaffDashboardComponent},
   {path: 'admin-dashboard', component: AdminDashboardComponent},
   {path: 'dental-form', component: DentalFormComponent},
   {path: 'medical-form', component: MedicalFormComponent},
   {path: 'avail-sched', component: AvailableSchedComponent},
   {path: 'account-settings', component: AccountSettingsComponent},
   {path: 'login-as', component: LoginAsComponent},
   {path: 'create-staff', component: CreateStaffComponent},
   {path: 'view-stud-app', component: ViewStudAppointmentComponent},
   {path: 'update-app', component: UpdateAppointmentComponent},
   {path: 'view-history', component: ViewVisitHistoryComponent},
   {path: 'view-app-list', component: ViewAppointmentListComponent},
   {path: 'update-stud-rec', component: UpdateStudentRecordComponent},
   {path: 'view-list-admin', component: ViewListAdminComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
