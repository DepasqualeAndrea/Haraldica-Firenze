import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

interface Collection {
  id: string;
  label: string;
  shopLabel: string;
  highlighted: boolean;
  bgEmoji: string;
}

@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './featured-collections.component.html',
  styleUrl: './featured-collections.component.scss'
})
export class FeaturedCollectionsComponent {
  collections: Collection[] = [
    { id: 'suits',       label: 'Suits',       shopLabel: 'Shop Men',   highlighted: false, bgEmoji: '🕴️' },
    { id: 'shirts',      label: 'Shirts',      shopLabel: 'Shop Women', highlighted: true,  bgEmoji: '👔' },
    { id: 'trousers',    label: 'Trousers',    shopLabel: 'Shop Men',   highlighted: false, bgEmoji: '👖' },
    { id: 'eveningwear', label: 'Eveningwear', shopLabel: 'Shop Women', highlighted: false, bgEmoji: '👗' },
  ];
}
