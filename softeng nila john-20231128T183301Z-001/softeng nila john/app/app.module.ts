import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginUserComponent } from './login-user/login-user.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { FooterComponent } from './footer/footer.component';
import { LoginVendorComponent } from './login-vendor/login-vendor.component';
import { RegisterVendorComponent } from './register-vendor/register-vendor.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { VendorMainPageComponent } from './vendor-main-page/vendor-main-page.component';
import { VendorSideBarComponent } from './vendor-side-bar/vendor-side-bar.component';
import { VendorAddItemComponent } from './vendor-add-item/vendor-add-item.component';
import { CurrencyCalcuVendorComponent } from './currency-calcu-vendor/currency-calcu-vendor.component';
import { VendorItemPageComponent } from './vendor-item-page/vendor-item-page.component';
import { ForumTopicViewComponent } from './forum-topic-view/forum-topic-view.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ForumMainComponent } from './forum-main/forum-main.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { VendorEditPageComponent } from './vendor-edit-page/vendor-edit-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { VendorAccountPageComponent } from './vendor-account-page/vendor-account-page.component';
import { ProfileEditInfoComponent } from './profile-edit-info/profile-edit-info.component';
import { ProfilePageVendorComponent } from './profile-page-vendor/profile-page-vendor.component';
import { ProfileEditInfoVendorComponent } from './profile-edit-info-vendor/profile-edit-info-vendor.component';
import { ForumCommentsComponent } from './forum-comments/forum-comments.component';
import { VendorForumMainComponent } from './vendor-forum-main/vendor-forum-main.component';
import { VendorForumCommmentComponent } from './vendor-forum-commment/vendor-forum-commment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    AppComponent,
    HeaderUserComponent,
    FooterComponent,
    LoginVendorComponent,
    FooterComponent,
    RegisterVendorComponent,
    VendorMainPageComponent,
    SideBarComponent,
    CurrencyConverterComponent,
    VendorSideBarComponent,
    VendorAddItemComponent,
    VendorItemPageComponent,
    CurrencyCalcuVendorComponent,
    ForumTopicViewComponent,
    LoginUserComponent,
    RegisterUserComponent,
    ForumMainComponent,
    ItemPageComponent,
    VendorEditPageComponent,
    ProfilePageComponent,
    VendorAccountPageComponent,
    ProfileEditInfoComponent,
    ProfilePageVendorComponent,
    ProfileEditInfoVendorComponent,
    ForumCommentsComponent,
    VendorForumMainComponent,
    VendorForumCommmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
