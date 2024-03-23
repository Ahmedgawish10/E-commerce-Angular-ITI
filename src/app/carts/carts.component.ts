import { Component } from '@angular/core';
import { CountCartService } from '../services/count-cart.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  constructor(private instanceCountCartService:CountCartService ,private instanceCartService:CartService ){

  }
  cartEmpty='';
arrProducts:any;
  ngOnInit(){
    this.instanceCartService.getproducts().subscribe((one)=> this.arrProducts=[...one]  )
             console.log(this.arrProducts);
             if (this.arrProducts=='') {
               this.cartEmpty="cart is empty !"
               
             }
            
   
  }
  deleteSelecteProduct(id:any){
  this.instanceCartService.deleteProduct(id)
  //console.log(id);
  
  }
  


}
