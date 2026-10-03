import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar-component/navbar-component';
import { SidebarComponents } from '../../components/sidebar-components/sidebar-components';
import { SidebarItem } from '../../components/sidebar-components/sidebar-components';
import { JsonPipe } from '@angular/common';
import { SliderCompoents } from '../../components/slider-compoents/slider-compoents';
@Component({
  selector: 'app-home',
  imports: [NavbarComponent, SidebarComponents, SliderCompoents],
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

}

  