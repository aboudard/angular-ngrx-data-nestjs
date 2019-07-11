import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todosws-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;

  constructor() { }
  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
  }

}
