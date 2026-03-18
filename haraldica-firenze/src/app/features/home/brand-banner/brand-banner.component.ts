import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brand-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './brand-banner.component.html',
  styleUrl: './brand-banner.component.scss'
})
export class BrandBannerComponent {
  craftDetails = [
    { icon: '🪡', label: 'Artisan Craftsmanship' },
    { icon: '🏛️', label: 'Florence Heritage' },
  ];
}
