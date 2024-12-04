import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchInputComponent } from '../../../../../shared/components/input/search-input/search-input.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';

@Component({
  selector: '[view-exchange-table]',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, SearchInputComponent, ButtonComponent],
  templateUrl: './exchange-table.component.html',
})
export class ExchangeTableComponent {
  @Input()
  label!: string;
  @Input()
  keys: string[] = [];

  @Input()
  body: any[] = [];
  @Input()
  itemIconUrls: string[] = [];
  @Input()
  forbiddenKeysInItem: string[] = [];

  @Input()
  showEdit = true;

  @Output()
  onEditClick = new EventEmitter<void>();

  itemKeys(item: any): Array<string> {
    return Object.keys(item);
  }

  isItemKeyInForbiddenKey(key: string) {
    return this.forbiddenKeysInItem.includes(key);
  }

  isBoolean() {}
}
