import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ReactiveFormsModule,FormGroup,FormControl,Validators,FormBuilder} from "@angular/forms"
import { group } from '@angular/animations';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
loginForm:FormGroup;
//----------------first way for reactive form --------------//
// constructor(){
//   this.loginForm=new FormGroup({
//       loginName:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
//       loginEmail:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo ?)+\.[a-zA-Z]{2,}$/)]),
//       loginUsername:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
//       loginPassword:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9_]+$/)]),
//       loginConfirmPassword:new FormControl('',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]),
//   })
// }
/*-----------------second way for reactive form----------------*/
constructor(private fb:FormBuilder){
  this.loginForm=this.fb.group({
    loginName:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15),Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    loginEmail:['',[Validators.required,Validators.minLength(10),Validators.maxLength(30),Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|yahoo ?)+\.[a-zA-Z]{2,}$/)]],
    loginUsername:['',[Validators.required,Validators.minLength(10),Validators.maxLength(20),Validators.pattern(/^[a-zA-Z0-9_]+$/)]],
    loginPassword:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/)]],
    loginConfirmPassword:['',[Validators.required,Validators.maxLength(20),Validators.minLength(8)]],
  })
}
// function register submit 
handleRegisterSubmit(){
  this.markFormGroupTouched(this.loginForm);
  if (this.loginForm.status=="VALID") {
    console.log("Your data is submited");
  }else{
    console.log("Your data  Not submited");
    // console.log(this.loginForm.status);

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
  this.confirmPassword =this.loginForm?.get('loginConfirmPassword')?.value;
   this.password = this.loginForm?.get('loginPassword')?.value;
    this.idinticalpass= this.password === this.confirmPassword ? "idintical" :null;
  //console.log(this.idinticalpass);


}
PasswordMatch() {
  this.confirmPassword =this.loginForm?.get('loginConfirmPassword')?.value;
   this.password = this.loginForm?.get('loginPassword')?.value;
    this.idinticalpass= this.password === this.confirmPassword ? "idintical" :null;


}
}
