import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { SidebarComponents } from '../../components/sidebar-components/sidebar-components';
import { SidebarItem } from '../../components/sidebar-components/sidebar-components';
import { JsonPipe } from '@angular/common';
import { SliderCompoents } from '../../components/slider-compoents/slider-compoents';
import { CategoriesCompoennts } from '../../components/categories-compoennts/categories-compoennts';
import { BestSellerComponents } from '../../components/best-seller-components/best-seller-components';
import { LastestProducts } from '../../components/lastest-products/lastest-products';
import { FooterComponents } from '../../components/footer-components/footer-components';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SidebarComponents, SliderCompoents, CategoriesCompoennts, BestSellerComponents, LastestProducts, FooterComponents],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  sidebarCategories: SidebarItem[] = [

    {
      id: 1,
      icon: 'fa-solid fa-desktop',
      title: 'Computer',
      subitem: [

       {
        id: 101,
        label: 'Computer Accessories',
       },
       {
        id: 102,
        label: 'Computer Components'
       },
       {
        id: 103,
        label: 'Computer Case'
       },
       {
        id: 104,
        label: 'Laptops'
       }

      ]
    },

    {
      id: 2,
      icon: 'fa-solid fa-mobile',
      title: 'Phone',
      subitem: [

        {
          id: 201,
          label: 'Phone Accessories'

        },

        {
          id: 202,
          label: 'Phone Case'
        },

          {
          id: 203,
          label: 'IPhone'

        },

        {
          id: 202,
          label: 'Samsung'
        },

        {
          id: 203,
          label: 'Xiaomi'
        },
        {
          id: 204,
          label: 'Oppo'
        }
      ]
    },

     {
      id: 3,
      icon: 'fa-solid fa-gamepad',
      title: 'Gaming',
      subitem: [

        {
          id: 301,
          label: 'Game Accessories'

        },

        {
          id: 302,
          label: 'Game Console'
        },

          {
          id: 303,
          label: 'Play Station'

        },

        {
          id: 304,
          label: 'Nitendo Switch'
        },

        {
          id: 305,
          label: 'VR'
        },
        {
          id: 306,
          label: 'Xbox'
        }
      ]
    },

    
     {
      id: 5,
      icon: 'fa-solid fa-keyboard',
      title: 'Keyboard',
      subitem: [

        {
          id: 501,
          label: 'Keychorn'

        },

        {
          id: 502,
          label: 'Switch'
        },

          {
          id: 503,
          label: 'Mechanical Keyboard'

        },

        {
          id: 504,
          label: 'Gaming Keyboard'
        },

        {
          id: 505,
          label: 'GMK Keychorn'
        },
       
      ]
    },

      {
      id: 6,
      icon: 'fa-solid fa-alarm-clock',
      title: 'Watch',
      subitem: [

        {
          id: 601,
          label: 'Iwatch'

        },

        {
          id: 602,
          label: 'Smart Watch'
        },

          {
          id: 603,
          label: 'Sport Watch'

        },

        {
          id: 604,
          label: 'Normal watch'
        },

      ]
    },

    
    {
      id: 7,
      icon: 'fa-solid fa-headset',
      title: 'HeadPhone',
      subitem: [

        {
          id: 701,
          label: 'AirPods'

        },

        {
          id: 702,
          label: 'Gaming Headset'
        },

          {
          id: 703,
          label: 'Bluetooth Headset'

        },

       
      ]
    },

    {
      id: 7,
      icon: 'fa-solid fa-computer-mouse',
      title: 'Mouse',
      subitem: [

        {
          id: 701,
          label: 'Logitech'

        },

        {
          id: 702,
          label: 'Wireless Mouse'
        },

          {
          id: 703,
          label: 'Starlight Mouse'

        },

       
      ]
    },

  ]

  bestSellers = [
  {
    id: 1,
    brand: 'Apple',
    name: '2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB',
    image: '/assets/image/category-img/Imac.png',
    price: 2856.3,
    oldPrice: 3225.6,
    discount: 17,
    rating: 5,
    reviews: 65,
 
  },
  {
    id: 2,
    brand: 'Philips',
    name: 'Philips H4205 On-Ear Wireless Headphones with 32mm',
    image: '/assets/image/category-img/WirelessheadPhone.png',
    price: 154.3,
    oldPrice: 162.5,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },
  {
    id: 3,
    brand: 'Apple',
    name: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13"',
    image: '/assets/image/category-img/macbook-air-15-inch-m2-2-cambodia.png',
    price: 2325.3,
    oldPrice: 2225.6,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },
  {
    id: 4,
    brand: 'Apple',
    name: 'Apple Watch Series 8 [GPS 45mm] Smart Watch',
    image: '/assets/image/category-img/Smartwatch.png',
    price: 530.3,
    oldPrice: 560.6,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },
];

 latestDeal = [
  {
     
    id: 11,
    brand: 'PlayStation',
    name: 'PlayStation 5 pro slim',
    image: '/assets/image/category-img/ps5.png',
    price: 1280,
    oldPrice: 1300,
    discount: 20,
    rating: 5,
    reviews: 65,
 
  },
  {
    id: 12,
    brand: 'Asus Rog',
    name: 'Asus rog scar 2026 high performace graphic card',
    image: '/assets/image/category-img/Rogpng.png',
    price: 154.3,
    oldPrice: 162.5,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },
  {
    id: 13,
    brand: 'Keychron',
    name: 'Keychron Q1 Max QMK/VIA Wireless Custom Mechanical Keyboard',
    image: '/assets/image/category-img/Keychron-Q1-Max-QMK-VIA-Wireless-Custom-Mechanical-Keyboard-75_-Layout-Aluminum-Black-Fully-Assembled-Knob-for-Mac-Windows-Linux-Gateron-Jupiter-Brown.png',
    price: 229.99,
    oldPrice: 280,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },
  {
    id: 14,
    brand: 'Apple',
    name: 'Apple Watch Series 8 [GPS 45mm] Smart Watch',
    image: '/assets/image/category-img/Smartwatch.png',
    price: 530.3,
    oldPrice: 560.6,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },

  {
    id: 15,
    brand: 'Meta Quest VR',
    name: 'Meta quest VR 128 GB bring the world closer',
    image: '/assets/image/category-img/Digital-Realm-Quest-Experience-PNG.png',
    price: 530.3,
    oldPrice: 560.6,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },

  {
    id: 16,
    brand: 'Starlight Mouse',
    name: 'Final Mouse ULX Prophecy starlight',
    image: '/assets/image/category-img/clix_1_square_complete_1_1.png',
    price: 179.99,
    oldPrice: 230,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },

    {
    id: 17,
    brand: 'Samsung Airconditioner',
    name: 'Samsung airconditioner comfort',
    image: '/assets/image/category-img/AR40F12D0AGAF-FRONT.png',
    price: 179.99,
    oldPrice: 230,
    discount: 17,
    rating: 5,
    reviews: 65,
  
  },

    {
    id: 18,
    brand: 'Samsung Airconditioner',
    name: 'Samsung airconditioner comfort',
    image: '/assets/image/category-img/AR40F12D0AGAF-FRONT.png',
    price: 320,
    oldPrice: 340,
    discount: 20,
    rating: 5,
    reviews: 65,
  
  },

    {
    id: 19,
    brand: 'GoPro',
    name: 'Gopro Hero 13 body camera',
    image: '/assets/image/category-img/03-pdp-h13-gallery-768-375.png',
    price: 520.00,
    oldPrice: 540,
    discount: 20,
    rating: 5,
    reviews: 65,
  
  },

    {
    id: 20,
    brand: 'Sony Microphone',
    name: 'Sony Microphone series x',
    image: '/assets/image/category-img/pngtree-podcast-mic-png-image_16279107.png',
    price: 450,
    oldPrice: 480,
    discount: 30,
    rating: 5,
    reviews: 65,
  
  },

  {
    id: 21,
    brand: 'Samsung Washer',
    name: 'SAMSUNG FRONT LOAD WASHER 10KG (WW10DB7U94GBST)',
    image: '/assets/image/category-img/38433-washing-machine.png',
    price: 585.00,
    oldPrice: 615,
    discount: 5,
    rating: 5,
    reviews: 65,
  
  },

 
 ]

 featureDeal = {
  
    id: 1,
  brand: 'Apple',
  name: '2022 Apple iMac Retina 5K Display',
  images: [
    '/assets/image/category-img/Pc.png',
    '/assets/image/category-img/Rogpng.png',
    '/assets/image/category-img/Smartwatch.png',
  ],
  price: 2856.3,
  oldPrice: 3225.6,
  rating: 5,
  reviews: 65,
  available: 568,
  sold: 289,
  features: [
    '27-inch (diagonal) Retina 5K display',
    '3.1GHz 6-core 10th-generation Intel Core i5',
    'AMD Radeon Pro 5300 graphics',
  ],
  }
  
}
  
 



  