import { Routes } from '@angular/router';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PrivateCardComponent } from './private-card/private-card.component';
import { CartsComponent } from './carts/carts.component';

export const routes: Routes = [
  { path: '', component: EcommerceComponent, title: 'home' },
  { 
    path: 'register', 
   component: RegisterComponent,
   title: 'register-reactive' },
  {
     path: 'login',
    component: LoginComponent,
    title: 'login-template' },
  {
    path: 'private-product/:id',
    component: PrivateCardComponent,
    title: 'private-card-product',
  },
  {
    path: 'cart',
    component: CartsComponent,
    title: 'cart',
  },
  // {
  //   path: 'game-details/:id1',
  //   component: GameDetailsComponent,
  //   title: 'Game Details',
  // },
];
