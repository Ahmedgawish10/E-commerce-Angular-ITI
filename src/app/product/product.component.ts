import { Component ,Input,Output,EventEmitter} from '@angular/core';
import Products from "../../assets/products-list.json"
import { Product } from '../interface/product';
import { EcommerceComponent } from '../ecommerce/ecommerce.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import {ApiProductsService} from "../services/api-products.service";
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [EcommerceComponent,SingleProductComponent,NgFor,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
constructor(private instanceOfApiProducts:ApiProductsService,private instanceOfCartService:CartService ){}
productList:any;

ngOnInit(){
this.instanceOfApiProducts.getAllProducts().subscribe((res:any)=>this.productList=res.products)
// console.log(this.productList);

}



}
