import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base-currency',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './base-currency.component.html',
  styleUrl: './base-currency.component.scss',
})
export class BaseCurrencyComponent {
  imgUrl = 'https://cdn-icons-png.flaticon.com/512/1490/1490853.png';

  items = [
    {
      id: 1,
      value: 'دلار',
      logo: 'https://cdn-icons-png.flaticon.com/512/1490/1490853.png',
    },
    {
      id: 2,
      value: 'یورو',
      logo: 'https://cdn-icons-png.flaticon.com/512/1490/1490850.png',
    },
  ];

  selectedItem = this.items[0];

  showSelectBox: boolean = false;

  open() {
    this.showSelectBox = true;
  }

  close() {
    this.showSelectBox = false;
  }
  handleSelect(baseCurrency: any) {
    this.selectedItem = baseCurrency;
    this.close();
  }
}
