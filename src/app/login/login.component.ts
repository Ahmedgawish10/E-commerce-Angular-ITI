import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators ,ReactiveFormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../services/cart.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

constructor(private route:Router,private toastr:ToastrService,private fb: FormBuilder,private _CartService: CartService,private auth: AuthService ){

  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(25), Validators.pattern('^[a-zA-Z0-9._%+-]+@(gmail|yahoo ?)+\\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25), Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$')]]
  });

}

handleLogin(){
  const loginUser=this.loginForm.value;
  this.markFormGroupTouched(this.loginForm)
        this.auth.login(loginUser)

}


markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsTouched();
    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    }
  });
}



}
