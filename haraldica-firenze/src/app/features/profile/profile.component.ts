import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  menuItems = [
    'My Orders',
    'Address Book',
    'Payment Methods',
    'Wishlist',
    'Account Settings',
  ];

  activeMenu = 'My Orders';

  orders = [
    { id: '#HF-2024-001', date: '2024-11-01', item: 'Bespoke Wool Suit',   status: 'Delivered', total: '€3,600' },
    { id: '#HF-2024-002', date: '2024-12-15', item: 'Cashmere Pullover',   status: 'In Transit', total: '€1,200' },
    { id: '#HF-2025-003', date: '2025-01-08', item: 'Silk Evening Jacket', status: 'Processing', total: '€2,200' },
  ];

  selectMenu(item: string): void {
    this.activeMenu = item;
  }
}
