import { Component ,Input,Output,EventEmitter} from '@angular/core';
import "./product.component.css"
import Products from "../../assets/products-list.json"
import { Product } from '../interface/product';
import { EcommerceComponent } from '../ecommerce/ecommerce.component';
import { SingleProductComponent } from '../single-product/single-product.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import {ApiProductsService} from "../services/api-products.service";
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [EcommerceComponent,SingleProductComponent,NgFor,FormsModule,NgIf],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
constructor(private instanceOfApiProducts:ApiProductsService,private instanceOfCartService:CartService ){}
productList:any;
loading:any
ngOnInit(){
  this.loading=true
this.aj()

}
aj(){

  this.instanceOfApiProducts.getAllProducts().subscribe((res:any)=>{
    // console.log(res.products);
      this.productList=res.products
      this.loading=false

    }
      )
}


}
