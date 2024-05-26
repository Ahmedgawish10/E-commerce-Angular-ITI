import { NgIf } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [NgIf],
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.css'
})
export class ScrollUpComponent {
  showScrollButton: boolean = false;

  // Function to scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Listen to window scroll event to toggle visibility of the scroll-to-top button
  @HostListener('window:scroll', [])
  onWindowScroll() {

    if (window.scrollY>400) {
      this.showScrollButton = window.scrollY > 200;
      
    }else{
      this.showScrollButton=false
      
    }
    

  }
}
