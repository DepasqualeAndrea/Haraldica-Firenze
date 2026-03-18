import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

interface Product {
  id: string;
  name: string;
  price: number;
  imageAlt: string;
}

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-carousel.component.html',
  styleUrl: './product-carousel.component.scss'
})
export class ProductCarouselComponent {
  private cartService = inject(CartService);

  products: Product[] = [
    { id: 'c1', name: 'Vicuna Overcoat',       price: 4800, imageAlt: 'Vicuna Overcoat' },
    { id: 'c2', name: 'Silk Evening Jacket',   price: 2200, imageAlt: 'Silk Evening Jacket' },
    { id: 'c3', name: 'Bespoke Wool Suit',     price: 3600, imageAlt: 'Bespoke Wool Suit' },
    { id: 'c4', name: 'Herringbone Trousers',  price: 950,  imageAlt: 'Herringbone Trousers' },
  ];

  formatPrice(price: number): string {
    return this.cartService.formatPrice(price);
  }
}
