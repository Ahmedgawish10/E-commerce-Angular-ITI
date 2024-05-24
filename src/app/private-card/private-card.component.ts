import { Component ,Input} from '@angular/core';
import { Product } from "../interface/product";
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from '../services/api-products.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import "./private-card.component.css"
@Component({
  selector: 'app-private-card',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './private-card.component.html',
  styleUrl: './private-card.component.css'
})
export class PrivateCardComponent {
// @Input() id ?: number;
constructor(private activatedRoute : ActivatedRoute,private SelectesProductApi:ApiProductsService,private _CartService: CartService ){}
productDetails : any;
ngOnInit(){
  const selectedId= this.activatedRoute.snapshot.params['id']
  this.SelectesProductApi.getSelectedProduct(selectedId).subscribe((productSelected)=>this.productDetails=productSelected  )
  //this.productDetails=this.products.filter((product:Product)=>product.id==selectedId)

}
arrProducts:any;
qunt:any=0;
addToCart(producti:any){
  console.log(this.productDetails.images[0]);
  
  this._CartService.addToCart(producti)
}
increaseQuantity(productId: any): void {
  this._CartService.increaseQuantity(productId);
  this.arrProducts = this._CartService.getItems();
 // console.log(this.arrProducts[0]);
  //console.log(this._CartService.getItems());
   //this.qunt= this.arrProducts[productId].quantity

}
decreaseQuantity(productId: any): void {
  this._CartService.decreaseQuantity(productId);
  this.arrProducts = this._CartService.getItems();
}

}
