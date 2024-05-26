import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.isAuthenticatedSubject.asObservable();
  private currentUser: string | null = null;
  private users: {}[] = [];
  public nameOfUser:any;

  constructor(private router: Router, private toastr: ToastrService,private _CartService:CartService) {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      const email=localStorage.getItem("currentUser")
      this.nameOfUser = email?.split('@')[0];
    }
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('currentUser');
    if (storedAuth === 'true' && storedUser) {
      this.isAuthenticatedSubject.next(true);
      this.currentUser = storedUser;
    }
  }
  // function auth register
  register(userRgisterd: any): boolean {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      if (
        JSON.parse(storedUsers).some(
          (user: any) => user.registerEmail == userRgisterd.registerEmail
        )
      ) {
        this.toastr.warning('Email is token !');
        return false;
      } else {
        this.users.push(userRgisterd);
        localStorage.setItem('users', JSON.stringify(this.users));
        this.toastr.success('Registered Successfully!');
        this.router.navigate(["login"])
        return true;
      }
    }
    this.users.push(userRgisterd);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(["login"])
    this.toastr.success('Registered Successfully!');

    return true;
  }
// fuction auth login
  login(loginUser: any): boolean {
    const storedUsers = localStorage.getItem('users');
  // if there users in localstorage  get it 
      if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      if (
    // if there users in localstorage and the email login and password   match to any one user !
        JSON.parse(storedUsers).some(
          (user: any) =>
            user.registerEmail == loginUser.email &&
            user.registerPassword == loginUser.password
        )
      ) {
        this.isAuthenticatedSubject.next(true);
        this.currentUser = loginUser.email;
        this.toastr.success('Login Successfully!');
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', loginUser.email);
         const email=localStorage.getItem("currentUser")
         this.nameOfUser = email?.split('@')[0];
         this.router.navigate(["/"])

        
        return true;
      }else{
        // if there users in localstorage and the email login and password  doesn't match to any one user !
          if (loginUser.email == '' && loginUser.password == '') {
            this.toastr.error(`All fileds are required`);
          }else if (loginUser.email == '' && loginUser.password !== '') {
                this.toastr.error(`email is required`);
              } else if (loginUser.email !== '' && loginUser.password == '') {
                this.toastr.error(`password is required`);
              } else {
                this.toastr.error(`Invalid Credintails`);
              }
      }

    } else {

      if (loginUser.email == '' && loginUser.password == '') {
        this.toastr.error(`All fileds are required`);
      } else if (loginUser.email == '' && loginUser.password !== '') {
        this.toastr.error(`email is required`);
      } else if (loginUser.email !== '' && loginUser.password == '') {
        this.toastr.error(`password is required`);
      } else {
        this.toastr.error(`Invalid Credintails`);
      }
      return false;
    }
    return false;
  }
// fuction auth logout
  logout() {
    this.isAuthenticatedSubject.next(false);
    this.currentUser = null;
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('users');
    localStorage.removeItem('allProducts');
    this.router.navigate(['/']);
// ++++++++++++++++++++++++++++
this._CartService.count.next(0)
const emptyCart=this._CartService.items=[];
localStorage.setItem("allProducts",JSON.stringify(emptyCart))



  }
// fuction auth is user is logged or not
  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.value;
  }
// function get current user
  getCurrentUser(): string | null {
    return this.currentUser;
  }
}
