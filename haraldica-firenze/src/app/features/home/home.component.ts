import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';
import { BrandBannerComponent } from './brand-banner/brand-banner.component';
import { FeaturedCollectionsComponent } from './featured-collections/featured-collections.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    ProductCarouselComponent,
    BrandBannerComponent,
    FeaturedCollectionsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
