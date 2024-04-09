import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { VendorMainPageComponent } from './vendor-main-page/vendor-main-page.component';
import { VendorAddItemComponent } from './vendor-add-item/vendor-add-item.component';
import { LoginUserComponent } from './login-user/login-user.component'; 
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';  
import { DashboardComponent } from './dashboard/dashboard.component';    
import { RegisterUserComponent } from './register-user/register-user.component';
import { VendorItemPageComponent } from './vendor-item-page/vendor-item-page.component';
import { CurrencyCalcuVendorComponent } from './currency-calcu-vendor/currency-calcu-vendor.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { VendorEditPageComponent } from './vendor-edit-page/vendor-edit-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
// import { VendorAccountPageComponent } from './vendor-account-page/vendor-account-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';
import { ProfileEditInfoComponent } from './profile-edit-info/profile-edit-info.component';
import { ProfilePageVendorComponent } from './profile-page-vendor/profile-page-vendor.component';
import { ProfileEditInfoVendorComponent } from './profile-edit-info-vendor/profile-edit-info-vendor.component';
import { VendorForumMainComponent } from './vendor-forum-main/vendor-forum-main.component';
import { VendorForumCommmentComponent } from './vendor-forum-commment/vendor-forum-commment.component';
const routes: Routes = [
 {path: '', component: LoginPageComponent},
 {path: 'login-vendor', component: LoginVendorComponent},
 {path: 'main-vendor', component: VendorMainPageComponent},
 {path: 'add-item-vendor', component: VendorAddItemComponent},
 {path: 'login-user', component: LoginUserComponent},
 {path: 'vendor-registration', component: RegisterVendorComponent},
 {path: 'user-registration', component: RegisterUserComponent},
 {path: 'user-dashboard', component:DashboardComponent},
 {path: 'vendor-item-page', component:VendorItemPageComponent},
 {path: 'vendor-currency', component:CurrencyCalcuVendorComponent},
 {path: 'user-currency', component: CurrencyConverterComponent},
 {path: 'vendor-edit-page', component:VendorEditPageComponent},
 {path: 'profile-user', component:ProfilePageComponent},
//  {path: 'profile-vendor', component:VendorAccountPageComponent},
 {path: 'item-page', component:ItemPageComponent},
 {path: 'forum-main', component:ForumMainComponent},
 {path: 'forum-comments', component:ForumCommentsComponent},
 {path: 'profile-edit-user', component:ProfileEditInfoComponent},
 {path: 'profile-vendor', component: ProfilePageVendorComponent},
 {path: 'profile-edit-vendor', component: ProfileEditInfoVendorComponent},
 {path: 'forum-main-vendor', component:VendorForumMainComponent},
 {path: 'forum-vendor-comment', component: VendorForumCommmentComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
