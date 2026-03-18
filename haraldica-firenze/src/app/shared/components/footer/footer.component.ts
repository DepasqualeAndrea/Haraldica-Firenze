import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  footerLinks = [
    { label: 'About Us',  path: '/about' },
    { label: 'Careers',   path: '/careers' },
    { label: 'Terms',     path: '/terms' },
  ];

  onNewsletterSubmit(email: string): void {
    console.log('Newsletter signup:', email);
    // TODO: integrate with email service
  }
}
