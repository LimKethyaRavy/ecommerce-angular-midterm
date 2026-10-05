import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-best-seller-components',
  imports: [],
  templateUrl: './best-seller-components.html',
  styleUrl: './best-seller-components.css',
})
export class BestSellerComponents {

  @Input() products: any;
}
