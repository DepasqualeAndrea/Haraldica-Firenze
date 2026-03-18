import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart.service';

interface FeaturedProduct {
  id: string;
  name: string;
  price: number;
  imageAlt: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  private cartService = inject(CartService);

  featuredProducts: FeaturedProduct[] = [
    { id: 'p1', name: 'Cashmere Pullover', price: 1200, imageAlt: 'Cashmere Pullover' },
    { id: 'p2', name: 'Satin Maxi Dress', price: 1500, imageAlt: 'Satin Maxi Dress' },
    { id: 'p3', name: 'Silk Maxi Dress',  price: 1300, imageAlt: 'Silk Maxi Dress' },
    { id: 'p4', name: 'Desert Leather Oxford', price: 1300, imageAlt: 'Desert Leather Oxford' },
  ];

  formatPrice(price: number): string {
    return this.cartService.formatPrice(price);
  }
}
