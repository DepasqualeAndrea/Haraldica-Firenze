import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private cartService = inject(CartService);

  cartCount = this.cartService.cartCount;

  navLinks = [
    { label: 'New Arrivals', path: '/shop' },
    { label: 'Women',        path: '/shop' },
    { label: 'Men',          path: '/shop' },
    { label: 'Accessories',  path: '/shop' },
    { label: 'Home',         path: '/shop' },
    { label: 'Jewelry',      path: '/shop' },
    { label: 'Gifts',        path: '/shop' },
  ];

  openCart(): void {
    this.cartService.openCart();
  }
}
