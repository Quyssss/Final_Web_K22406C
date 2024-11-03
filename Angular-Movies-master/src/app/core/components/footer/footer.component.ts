import { Component } from '@angular/core';
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    NgForOf,
    NgOptimizedImage,
    RouterLink,         // Thêm RouterLink để sử dụng routerLink trong template
    RouterLinkActive    // Thêm RouterLinkActive để sử dụng routerLinkActive trong template
  ],
  standalone: true
})
export class FooterComponent {

  constructor() { }
}
