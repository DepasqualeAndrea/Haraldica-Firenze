import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="shop-page">
      <div class="container">
        <h1 class="shop-page__title">Shop</h1>
        <p class="shop-page__subtitle">The full collection — coming soon.</p>
        <a routerLink="/" class="btn-outline">Back to Home</a>
      </div>
    </main>
  `,
  styles: [`
    .shop-page {
      min-height: 80vh;
      display: flex;
      align-items: center;
      padding: var(--spacing-xl) 0;

      &__title {
        font-family: var(--font-serif);
        font-size: 3rem;
        color: var(--color-accent);
        margin-bottom: var(--spacing-sm);
      }

      &__subtitle {
        font-family: var(--font-sans);
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-md);
      }
    }
  `]
})
export class ShopComponent {}
