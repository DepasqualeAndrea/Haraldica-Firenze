import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Haraldica Firenze — Emblems of Italian Elegance'
  },
  {
    path: 'shop',
    loadComponent: () =>
      import('./features/shop/shop.component').then(m => m.ShopComponent),
    title: 'Shop — Haraldica Firenze'
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./features/pdp/pdp.component').then(m => m.PdpComponent),
    title: 'Product — Haraldica Firenze'
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./features/cart/cart.component').then(m => m.CartComponent),
    title: 'Cart — Haraldica Firenze'
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then(m => m.ProfileComponent),
    title: 'My Account — Haraldica Firenze'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
