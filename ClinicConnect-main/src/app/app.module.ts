// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes'; // Import the AppRoutingModule
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginComponent, AppComponent,
    SignupComponent,
    AppRoutingModule // Add the AppRoutingModule to the imports array
  ],
  providers: [],
})
export class AppModule { }
