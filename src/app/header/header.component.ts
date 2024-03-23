import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CountCartService } from '../services/count-cart.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  countCart=1;
constructor(private instanceCountCartService :CountCartService ){}
ngOnInit(){
  this.instanceCountCartService.getCountOfCart().subscribe((newValue)=>this.countCart=newValue)
};
  
           
}
