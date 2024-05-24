import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
// import { group } from '@angular/animations';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
registerForm:FormGroup;
//----------------first way for driven form --------------//
// constructor(){
//   this.registerForm=new FormGroup({
//       registerName:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
//       registerEmail:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo ?)+\.[a-zA-Z]{2,}$/)]),
//       registerUsername:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
//       registerPassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
//       registerConfirmPassword:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
//   })
// }
/*-----------------second way for reactive form----------------*/
constructor(private fb:FormBuilder,private toastr:ToastrService,private route:Router,private auth:AuthService){
  this.registerForm=this.fb.group({
    registerName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    registerEmail:['',[Validators.required,Validators.minLength(10),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo ?)+\.[a-zA-Z]{2,}$/)]],
    registerPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
    registerConfirmPassword:['',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]],
  })
}
// function register submit 
handleRegisterSubmit(){
  this.markFormGroupTouched(this.registerForm);
  if (this.registerForm.status=="VALID") {
   // const userRgisterd=this.registerForm.value
    this.auth.register(this.registerForm.value)   
  }else{
    console.log("Your data  Not submited");
    this.toastr.error("All fileds are required!")
  }
}
// if i submit data and not valid or empty make all input touched and show it's errors
markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    control.markAsTouched();
    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    }
  });
}
// for check password is idintical with confirmedpassword
password:any;
confirmPassword:any;
idinticalpass:any;
confirmPasswordMatch() {
  this.confirmPassword =this.registerForm?.get('registerConfirmPassword')?.value;
   this.password = this.registerForm?.get('registerPassword')?.value;
    this.idinticalpass= this.password === this.confirmPassword ? "idintical" :null;
  //console.log(this.idinticalpass);
}
PasswordMatch() {
  this.confirmPassword =this.registerForm?.get('registerConfirmPassword')?.value;
   this.password = this.registerForm?.get('registerPassword')?.value;
    this.idinticalpass= this.password === this.confirmPassword ? "idintical" :null;
}
}
