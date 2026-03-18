import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-pdp',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pdp.component.html',
  styleUrl: './pdp.component.scss'
})
export class PdpComponent {
  private cartService = inject(CartService);

  product = {
    id: 'p1',
    name: 'Bespoke Cashmere Pullover',
    price: 1200,
    description: 'Hand-crafted from the finest Himalayan cashmere, this pullover embodies the understated luxury that defines Haraldica Firenze. Each piece requires twelve hours of artisan finishing.',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  };

  selectedSize = '';

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  addToBag(): void {
    this.cartService.addItem({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      size: this.selectedSize,
    });
    this.cartService.openCart();
  }

  get formattedPrice(): string {
    return this.cartService.formatPrice(this.product.price);
  }
}
