import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollIntoView(id: string) {
    this.toggleMenu();

    const element = document.querySelector(id);
    const headerOffset = 55;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    console.log(offsetPosition)
    window.scrollTo({
      top: window.scrollY + offsetPosition,
      behavior: "smooth"
    });
  }

}
