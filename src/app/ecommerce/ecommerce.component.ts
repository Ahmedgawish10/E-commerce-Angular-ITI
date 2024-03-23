import { Component,Output,Input } from '@angular/core';
import { HeaderComponent } from './../header/header.component';
import { RegisterComponent } from './../register/register.component';
import { ProductComponent } from '../product/product.component';
import { Product } from '../interface/product';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [HeaderComponent,RegisterComponent,LoginComponent,ProductComponent],
templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {
 // @Input() inputValue?: Product;


}
