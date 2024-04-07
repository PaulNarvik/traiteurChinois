import { Component } from '@angular/core';
import { Input } from '@angular/core';

import { Item } from '../item';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: Item;
}
