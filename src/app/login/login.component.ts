import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,NgIf],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


handleLogin(loginFormInput:any){
console.log(loginFormInput.form);


}


}
