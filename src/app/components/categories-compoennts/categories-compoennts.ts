import { Component } from '@angular/core';

interface subCategory {
  id: number;
  title_label: string;
}

interface FeatureCategory {
  id: number;
  title_name: string;
  image: string;
  sub_category: subCategory[];
}

@Component({
  selector: 'app-categories-compoennts',
  imports: [],
  templateUrl: './categories-compoennts.html',
  styleUrl: './categories-compoennts.css',
})
export class CategoriesCompoennts {
  featureData: FeatureCategory[] = [
    {
      id: 1,
      title_name: 'SmartPhone',
      image: '/assets/image/category-img/SmartPhone.png',
      sub_category: [
        {
          id: 101,
          title_label: 'Phone Accessories',
        },
        {
          id: 102,
          title_label: 'Phone Case',
        },
        {
          id: 103,
          title_label: 'Postpaid Phones',
        },
        {
          id: 104,
          title_label: 'Refurbishes Phones',
        },
      ],
    },

    {
      id: 2,
      title_name: 'Televesion',
      image: '/assets/image/category-img/Tv.png',
      sub_category: [
        {
          id: 201,
          title_label: 'HD DVD Players',
        },
        {
          id: 202,
          title_label: 'Projection Screens',
        },
        {
          id: 203,
          title_label: 'Televesion Accessories',
        },
        {
          id: 204,
          title_label: 'Tv-DVD Combos',
        },
      ],
    },

    {
      id: 3,
      title_name: 'Computer',
      image: '/assets/image/category-img/Pc.png',
      sub_category: [
        {
          id: 301,
          title_label: 'Computer Components',
        },
        {
          id: 302,
          title_label: 'Computer Accessories',
        },
        {
          id: 303,
          title_label: 'Desktops',
        },
        {
          id: 304,
          title_label: 'Monitors',
        },
      ],
    },
    {
      id: 4,
      title_name: 'Electronics',
      image: '/assets/image/category-img/Washer.png',
      sub_category: [
        {
          id: 401,
          title_label: 'Office Electronics',
        },
        {
          id: 402,
          title_label: 'Portable Audio & Video',
        },
        {
          id: 403,
          title_label: 'Washing Machine',
        },
        {
          id: 404,
          title_label: 'Accessories & Supplier',
        },
      ],
    },
    {
      id: 5,
      title_name: 'labtop & Tablet',
      image: '/assets/image/category-img/Macbook.png',
      sub_category: [
        {
          id: 501,
          title_label: 'Office Labtops',
        },
        {
          id: 502,
          title_label: 'Gamning Labtop',
        },
        {
          id: 503,
          title_label: 'Labtop Accessories',
        },
        {
          id: 504,
          title_label: 'Tablet',
        },
      ],
    },
    {
      id: 6,
      title_name: 'SmartWatches',
      image: '/assets/image/category-img/Smartwatch.png',
      sub_category: [
        {
          id: 601,
          title_label: 'Sport Watches',
        },
        {
          id: 602,
          title_label: 'Chrongograph Watches',
        },
        {
          id: 603,
          title_label: 'Kids Watches',
        },
        {
          id: 604,
          title_label: 'Luxury Watches',
        },
      ],
    },
     {
      id: 7,
      title_name: 'Gaming',
      image: '/assets/image/category-img/GameController.png',
      sub_category: [
        {
          id: 701,
          title_label: 'Game Controllers',
        },
        {
          id: 702,
          title_label: 'Gaming Keyboards',
        },
        {
          id: 703,
          title_label: 'Pc Gaming Mice',
        },
        {
          id: 704,
          title_label: 'Pc Game Headsets',
        },
      ],
    },
      {
      id: 8,
      title_name: 'Outdoor Camera',
      image: '/assets/image/category-img/cctv.png',
      sub_category: [
        {
          id: 801,
          title_label: 'Security & Surveillance',
        },
        {
          id: 802,
          title_label: 'Surveillance DVR Kits',
        },
        {
          id: 803,
          title_label: 'Surveillance NVR Kits',
        },
        {
          id: 804,
          title_label: 'Smart Outdoor Lighting',
        },
      ],
    },
  ];
}
