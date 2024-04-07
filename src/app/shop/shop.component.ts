import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuService } from '../menu.service';
import { ItemComponent } from '../item/item.component';
import { Item } from '../item';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    ItemComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  menu: Item[] = [];
  menuFiltered: Item[] = [];

  menuService: MenuService = inject(MenuService);

  constructor() {
    this.menuService.getMenu().then((menu: Item[]) => {
      this.menu = menu;
    });
  }
}
