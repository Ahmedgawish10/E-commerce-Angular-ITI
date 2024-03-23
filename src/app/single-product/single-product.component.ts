import { Component,Input } from '@angular/core';
import {Product} from "../interface/product"
import { Router } from '@angular/router';
import { PrivateCardComponent } from '../private-card/private-card.component';
import { CountCartService } from '../services/count-cart.service';
import { CartService } from './../services/cart.service';
@Component({

  selector: 'app-single-product',
  standalone: true,
  imports: [PrivateCardComponent],
templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
@Input() producti! : Product;
countCart= 0;
products:any;

constructor(private router:Router,private instanceCountCartService:CountCartService ,private cartservice: CartService ){

}
sendProductToCart(product:any){
  this.cartservice.addProduct(product);

}

ngOnInit(){
}


redirectProductOfId(id:number){
this.router.navigate([`/private-product`, id]);
}
// add to cart just run function of service counter (set)
addToCart(){
this.instanceCountCartService.setCountOfCart();
// this.cartservice.addToCart2(p)
}



}
