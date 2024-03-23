import { Component ,Input} from '@angular/core';
import { Product } from "../interface/product";
import { ActivatedRoute } from '@angular/router';
import { ApiProductsService } from '../services/api-products.service';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-private-card',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './private-card.component.html',
  styleUrl: './private-card.component.css'
})
export class PrivateCardComponent {
// @Input() id ?: number;
constructor(private activatedRoute : ActivatedRoute,private SelectesProductApi:ApiProductsService ){}
productDetails : any;
ngOnInit(){
  //console.log(this.id);
  const selectedId= this.activatedRoute.snapshot.params['id']
this.SelectesProductApi.getSelectedProduct(selectedId).subscribe((productSelected)=>this.productDetails=productSelected)
  //this.productDetails=this.products.filter((product:Product)=>product.id==selectedId)




}




}
