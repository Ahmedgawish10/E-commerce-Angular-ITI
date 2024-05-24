import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carts',
  standalone: true,
  imports: [NgFor, FormsModule, NgIf, RouterLink, CommonModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css',
})
export class CartsComponent {
  arrProducts!: any;
  countCart: any;
  removeSmoth: any = false;
  constructor(private _CartService: CartService, private toast: ToastrService) {
    this.arrProducts = this._CartService.getItems();    
    if (this.arrProducts.length == 0) {
      this._CartService.count.next(0);
      this._CartService.count.subscribe((countCart) => (this.countCart = countCart));
    } else {
      this._CartService.count.subscribe((countCart) => (this.countCart = countCart));
    }
  }
  ngOnInit() {}
  //deleteSelecteProduct of the selected prodcut
  deleteSelecteProduct(id: any) {
    this._CartService.removeFromCart(id);
    this.arrProducts = this._CartService.getItems();
    this.removeSmoth = true;
    if (this._CartService.getItems().length == 0) {
      this.toast.error('Your cart is empty now !');
    }
  }
  //increaseQuantity of the selected prodcut
  increaseQuantity(productId: any): void {
    this._CartService.increaseQuantity(productId);
    this.arrProducts = this._CartService.getItems();
  }
  //decreaseQuantity of the selected prodcut
  decreaseQuantity(productId: any): void {
    this._CartService.decreaseQuantity(productId);
    this.arrProducts = this._CartService.getItems();
  }
}
