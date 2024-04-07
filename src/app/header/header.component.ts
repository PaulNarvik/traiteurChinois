import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  toggleMenu() {
    var hamburger = document.querySelector(".hamburger");
    hamburger?.classList.toggle("active");

    var nav = document.querySelectorAll(".nav");
    nav.forEach((elem) => {
      elem?.classList.toggle("active");
    });
  }
}


