import { Component,Input } from '@angular/core';
import {Product} from "../interface/product"
import { Router, RouterLink } from '@angular/router';
import { PrivateCardComponent } from '../private-card/private-card.component';
import { CartService } from './../services/cart.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';
@Component({

  selector: 'app-single-product',
  standalone: true,
  imports: [PrivateCardComponent,FormsModule,NgIf,RouterLink],
templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  private cartItems: any[] = [];
   
@Input() producti! : Product;
products:any;
e:any
  popup: any;
constructor(private router:Router,private _CartService: CartService,private _AuthService:AuthService){}

ngOnInit(){

// console.log(this._AuthService.isLoggedIn()
//   );
// this.e=this._AuthService.isLoggedIn()
// console.log(this.e);

}
redirectProductOfId(id:number){  
this.router.navigate([`/private-product`, id]);
}
addToCart(producti:any){
  if(this._AuthService.isLoggedIn()){

    this._CartService.addToCart(producti)
  }
  //console.log(this.cartservice.getItems());
}

isLoggedPopup(){
  console.log(this._AuthService.isLoggedIn());
  
  if (this._AuthService.isLoggedIn()==false  ) {
    if (this.popup==false) {
      this.popup=!this.popup;
    }else{
      this.popup=!this.popup;
    }
  }else{
    console.log("you logged already");
    console.log(this._AuthService.isLoggedIn()); 
  }
 
  
  
}

























// add to cart just run function of service counter (set)
// addToCart(){
// this.instanceCountCartService.setCountOfCart();
// // this.cartservice.addToCart2(p)
// //console.log(this.producti);

// }



}
