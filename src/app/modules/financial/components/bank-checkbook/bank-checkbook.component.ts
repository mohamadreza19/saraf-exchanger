import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { BankCheckBookControl_ } from '../../models/bank-checkbook-control';

import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { BankCheckbook } from '../../models/bank-checkbook.interface';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ModalService } from 'src/app/core/services/modal.service';

import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'com-bank-checkbook',
  standalone: true,
  imports: [ButtonComponent, NgTemplateOutlet, NgFor, NgIf, CommonModule],
  templateUrl: './bank-checkbook.component.html',
  styleUrl: './bank-checkbook.component.css',
})
export class BankCheckbookComponent implements OnInit {
  @Input()
  control!: BankCheckBookControl_;

  @Input()
  get controlVal(): BankCheckbook[] {
    return this.control.value;
  }

  constructor(private modal: ModalService, private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    // Set the default value (select the first option by default)
    // console.log(this.formGroupDirective);
    // console.log(this.control);
    this.control.show$.subscribe((val) => {
      this.onShowChange(val);
    });
  }

  onShowChange(show: boolean) {
    // Handle logic for changes in `show`
    if (show) {
      this.el.nativeElement.classList.remove('hidden');
    } else {
      this.el.nativeElement.classList.add('hidden');
    }
  }
  handleRemoveCheckBook(checkBookIndex: number) {
    const checkBookList = this.controlVal.filter((_, i) => i !== checkBookIndex);

    this.control.setValue(checkBookList);
  }
  openModal() {
    import('../bank-checkbook-add/bank-checkbook-add.component').then((m) => {
      const modalRef = this.modal.open(m.BankCheckbookAddComponent, {
        width: '600px',
        maxWidth: '600px',
        data: {
          banks: ['صادرات', 'ملی'],
          currencyUnits: ['ریال', 'دلار'],
          onSubmit: (form: CustomFormGroup) => {
            this.control.setValue([...this.controlVal, form.value as BankCheckbook]);
          },
        },
      });
    });

    // this.modal.open(BankCheckbookAddComponent, {
    //   width: '600px',
    //   maxWidth: '600px',
    //   data: {
    //     banks: ['صادرات', 'ملی'],
    //     currencyUnits: ['ریال', 'دلار'],
    //   },
    // });
  }

  calculateAllCheckbookAmounts() {
    const totalCheckAmount = this.controlVal.reduce((total, item) => {
      // Remove commas and convert checkAmount to a number
      const amount = Number(item.checkAmount.replace(/,/g, ''));
      total += amount;

      return total;
    }, 0); // Start with an initial value of 0
    return totalCheckAmount;
  }
}
