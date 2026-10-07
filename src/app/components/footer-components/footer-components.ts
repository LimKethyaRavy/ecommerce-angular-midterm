import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-components',
  imports: [],
  templateUrl: './footer-components.html',
  styleUrl: './footer-components.css',
})
export class FooterComponents {
  makeMoney = ['Mission & Vision', 'Our Team', 'Careers', 'Press & Media', 'Advertising', 'Testimonials'];
  company = ['Our Blog', 'Plans & Pricing', 'Knowledge Base', 'Cookie Policy', 'Office Center', 'News & Events'];
  account = ['FAQs', 'Editor Help', 'Community', 'Live Chatting', 'Contact Us', 'Support Center'];

  socials = [
    { id: 1, icon: 'fa-brands fa-facebook-f' },
    { id: 2, icon: 'fa-brands fa-instagram' },
    { id: 3, icon: 'fa-brands fa-twitter' },
    { id: 4, icon: 'fa-brands fa-linkedin-in' },
  ];

  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
