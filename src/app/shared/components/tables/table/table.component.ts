import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { InputComponent } from '../../input/input.component';
import { CustomFormControl } from 'src/app/shared/form-builder/form-builder.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { ReactiveFormsModule } from '@angular/forms';
const logo =
  'https://daftarensha.ir/wp-content/uploads/2024/09/%D9%BE%D8%B3%D8%B1-%D8%A8%DA%86%D9%87-%D8%AE%D9%88%D8%B4%DA%AF%D9%84-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-.jpeg';
@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [InputComponent, NgFor, NgIf, NgClass, ButtonComponent, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  selectedItemsIndex: number[] = [];
  @ViewChildren('checkboxChild')
  checkboxChildren!: QueryList<ElementRef<HTMLInputElement>>;

  @Input()
  tableConfig!: TableConfig;
  constructor() {}

  ngOnInit(): void {
    console.log(this.tableConfig);
  }

  getObjectValues(obj: object): string[] {
    return Object.values(obj);
  }
  _textTruncate(str: string) {
    return str.length > 18 ? str.slice(0, 18) + '...' : str;
  }
  _choseClassBasedCustomStyleForVal(value: string | number) {
    if (!this.tableConfig.customStyleForVal) return '';
    const stringVal = String(value) as keyof typeof this.tableConfig.customStyleForVal;

    return this.tableConfig.customStyleForVal[stringVal] || '';
  }
  _getFormCroupControlsAsArray(controls: object): CustomFormControl[] {
    return Object.values(controls) as CustomFormControl[];
  }
  onCheckboxChange(event: Event, index: number) {
    const inputElement = event.target as HTMLInputElement;
    // this.isChecked =
    if (inputElement.checked) {
      this.selectedItemsIndex.push(index);
    } else {
      this.selectedItemsIndex = this.selectedItemsIndex.filter((item) => item !== index);
    }
    console.log(this.selectedItemsIndex);
  }
  onAllCheckboxChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    const parentIsCheck = inputElement.checked;
    if (this.checkboxChildren.length) {
      this.checkboxChildren.forEach((checkbox, index) => {
        if (parentIsCheck) {
          checkbox.nativeElement.checked = true;
          this.selectedItemsIndex.push(index);
        } else {
          checkbox.nativeElement.checked = false;
          this.selectedItemsIndex = [];
        }
      });
    }
  }
}
