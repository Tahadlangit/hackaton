import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(){}
  username: string = '';
  password: string = '';

  onSubmit() {
    // Add your login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }

}
