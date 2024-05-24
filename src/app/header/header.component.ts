import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../services/auth.service';
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














}
