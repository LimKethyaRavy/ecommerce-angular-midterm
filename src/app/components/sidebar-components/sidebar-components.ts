import { Component, Input } from '@angular/core';


export interface sidebarCategory {

  id: number;
  label: string;


}
export interface SidebarItem {

  id: number;
  icon: string;
  title: string;
  subitem: sidebarCategory[];
  
}



@Component({
  selector: 'app-sidebar-components',
  imports: [],
  templateUrl: './sidebar-components.html',
  styleUrl: './sidebar-components.css',
})
export class SidebarComponents {

  @Input() categories: SidebarItem[] = [];

}
