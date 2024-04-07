import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = "http://localhost:3000/items"

  async getMenu(): Promise<Item[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  constructor() { }
}
