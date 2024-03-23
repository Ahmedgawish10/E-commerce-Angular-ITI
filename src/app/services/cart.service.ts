import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products=new  BehaviorSubject<any>([]);

  constructor() { }

  getproducts(){
   // console.log(this.arrProducts);
    return this.products.asObservable()
    console.log(this.arrProducts)

  }


  arrProducts:any=[];
  addProduct(product:any){
   this.arrProducts.push(product)
    this.products.next( this.arrProducts)        
  // console.log(product.id)
  }

deleteProduct(id:any){
  this.arrProducts = this.arrProducts.filter((product:any )=> product.id !== id);
  this.products.next( this.arrProducts)      

}

  // addToCartAndCheck(product: any) {
  //   const currentValue = this.products.value;
  //   // Check if the product already exists in the cart
  //   const isProductExist = currentValue.fil((item:any) => item.id === product.id);
  //   if (!isProductExist) {
  //     // If the product does not exist, add it to the cart
  //     const updatedValue = [...currentValue, product];
  //     this.products.next(updatedValue);
  //     console.log(updatedValue);
  //   } else {
  //     // If the product already exists, do not add it again
  //     console.log("Product already exists in the cart.");
  //   }
  // }










}
