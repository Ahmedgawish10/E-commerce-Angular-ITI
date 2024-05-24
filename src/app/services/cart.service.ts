import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interface/product';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public count=new  BehaviorSubject<any>(0);
  public Loggedout=new  BehaviorSubject<any>(false);
  public x=new  BehaviorSubject<any>(1);

   //gets the all products that added to cart from localstorage everyonce the user refresh the page!
  constructor(private toast:ToastrService) { 
    this.loadIProductsLocalStorage(); 
                                     
 
          
    
    if(localStorage.getItem("currentUser")){
this.x.next(1)
console.log("mmm");
                 
    }
      }

// add products to cart and save it in localstorage!
  private items: any[] = [];
  addToCart(product: Product): void {
    const existingProduct = this.items.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
      this.toast.info('Product is already in cart');
    } else {
      this.items.push({ product, quantity: 1 });  
      this.count.next(this.items.length)
      this.toast.success('Product add to cart');
     // localStorage.setItem("countCart", this.count.value.toString())
    }
    this.saveProductsToLocalStorage();
  }
//get the current prodcuts that added to cart and updated the count of cart!
  getItems() {
    this.count.next(this.items.length)    
    return this.items;
  }
  //save the selected product to the cart and localstorage!
  private saveProductsToLocalStorage(): void {    
    localStorage.setItem("allProducts", JSON.stringify(this.items));
  }
  // get the prodcuts that added to cart from localstorge for everyonce the user refresh the page!
  private loadIProductsLocalStorage(): void {
    const savedItems = localStorage.getItem("allProducts");
    if (savedItems) {
    return  this.items = JSON.parse(savedItems);
    }
  }
  //remove the selected product from the cart and localstorage!
  removeFromCart(productId: any): void {
    this.items = this.items.filter((item,i) =>{           
    return  item.product.id !== productId    
    }); 
    this.saveProductsToLocalStorage()
    this.count.next(this.items.length)
    this.toast.warning('Product deleted from cart');
  }
  //icrease the amount of selected product! 
  increaseQuantity(productId: number): void {
    const existingItem = this.items.find(item => item.product.id === productId);
    if (existingItem) {
      existingItem.quantity++;
      this.saveProductsToLocalStorage();
    }
  }
  //decrease the amount of selected product!  
  decreaseQuantity(productId: any): void {
    const existingItem = this.items.find(item => item.product.id === productId);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity--;
      this.saveProductsToLocalStorage();
    }
  }
// logout
// logout(){
//   localStorage.clear()
//   this.Loggedout.next(true)
//   return this.Loggedout.value
// }















}
