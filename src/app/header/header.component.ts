import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
import "./header.component.css"
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  countCart: any;
  currntUser:any;
  isAuthenticated = false;
  isLoggedin=false;
  popup: any;
  constructor(private _CartService: CartService,public _AuthService:AuthService ) {
}
  ngOnInit() { 
   // count cart service   
    this._CartService.getItems();
    this._CartService.count.subscribe((count) => {      
      this.countCart = count;
    // isAuthenticated srvice user
      this._AuthService.isAuthenticated.subscribe(
        isAuthenticated => {
          this.isAuthenticated = isAuthenticated;
          
        }
      );

    });


  }

  logout(){
    this._AuthService.logout()
  
  }
  isLoggedPopup(){
    console.log(this._AuthService.isLoggedIn());
    
  
      if (this.popup==false) {
        this.popup=!this.popup;
      }else{
        this.popup=!this.popup;
      }
    
   
    
    
  }
  













}
