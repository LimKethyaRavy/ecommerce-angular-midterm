import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { SidebarComponents } from '../../components/sidebar-components/sidebar-components';
import { SidebarItem } from '../../components/sidebar-components/sidebar-components';
import { JsonPipe } from '@angular/common';
import { SliderCompoents } from '../../components/slider-compoents/slider-compoents';
import { CategoriesCompoennts } from '../../components/categories-compoennts/categories-compoennts';
import { BestSellerComponents } from '../../components/best-seller-components/best-seller-components';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SidebarComponents, SliderCompoents, CategoriesCompoennts, BestSellerComponents],
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
    image: '/assets/image/category-img/Pc.png',
    price: 2856.3,
    oldPrice: 3225.6,
    discount: 17,
    rating: 5,
    reviews: 65,
    features: [
      '27-inch (diagonal) Retina 5K display',
      '3.1GHz 6-core 10th-generation Intel Core i5',
      'AMD Radeon Pro 5300 graphics',
    ],
  },
  {
    id: 2,
    brand: 'Philips',
    name: 'Philips H4205 On-Ear Wireless Headphones with 32mm',
    image: '/assets/image/products/headphone.png',
    price: 154.3,
    oldPrice: 162.5,
    discount: 17,
    rating: 5,
    reviews: 65,
    features: [
      '32mm drivers for rich sound',
      'Bluetooth wireless connection',
      'Lightweight on-ear design',
    ],
  },
  {
    id: 3,
    brand: 'Apple',
    name: '2020 Apple MacBook Air Laptop: Apple M1 Chip, 13"',
    image: '/assets/image/products/macbook.png',
    price: 2325.3,
    oldPrice: 2225.6,
    discount: 17,
    rating: 5,
    reviews: 65,
    features: [
      '13-inch Retina display',
      'Apple M1 chip with 8-core CPU',
      'Up to 18 hours of battery life',
    ],
  },
  {
    id: 4,
    brand: 'Apple',
    name: 'Apple Watch Series 8 [GPS 45mm] Smart Watch',
    image: '/assets/image/products/applewatch.png',
    price: 530.3,
    oldPrice: 560.6,
    discount: 17,
    rating: 5,
    reviews: 65,
    features: [
      '45mm Always-On Retina display',
      'GPS with heart rate monitoring',
      'Water resistant up to 50 meters',
    ],
  },
];

}

  