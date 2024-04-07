import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url = "https://raw.githubusercontent.com/paulnarvik/traiteurChinois/master/db.json"

  async getMenu() {
    const data = await fetch(this.url);
    return await data.json();
  }

  constructor() { }
}
