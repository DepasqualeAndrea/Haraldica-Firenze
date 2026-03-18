import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size?: string;
  quantity: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // --- State ---
  cartItems = signal<CartItem[]>([]);

  // --- Computed ---
  cartCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0)
  );

  cartTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  cartOpen = signal(false);

  // --- Actions ---
  addItem(item: Omit<CartItem, 'quantity'>): void {
    this.cartItems.update(items => {
      const existing = items.find(i => i.id === item.id && i.size === item.size);
      if (existing) {
        return items.map(i =>
          i.id === item.id && i.size === item.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...items, { ...item, quantity: 1 }];
    });
  }

  removeItem(id: string, size?: string): void {
    this.cartItems.update(items =>
      items.filter(i => !(i.id === id && i.size === size))
    );
  }

  updateQuantity(id: string, quantity: number, size?: string): void {
    if (quantity <= 0) {
      this.removeItem(id, size);
      return;
    }
    this.cartItems.update(items =>
      items.map(i =>
        i.id === id && i.size === size ? { ...i, quantity } : i
      )
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  openCart(): void  { this.cartOpen.set(true); }
  closeCart(): void { this.cartOpen.set(false); }
  toggleCart(): void { this.cartOpen.update(v => !v); }

  // Format price in euro
  formatPrice(amount: number): string {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(amount);
  }
}
