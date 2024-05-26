import { Component } from '@angular/core';
import { RouterOutlet   } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ScrollUpComponent } from './scroll-up/scroll-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HeaderComponent,FooterComponent,ScrollUpComponent,CommonModule],
templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab3';
}
