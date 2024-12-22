import { Component, ElementRef, input, Input, OnInit } from '@angular/core';

import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { ReceiveReceipt, ReceiveReceiptControl_ } from '../../models/receive-receipt.control';
const data: ReceiveReceipt = {
  cashPayment: '10000',
  checkbooksAmounts: '20000',
  amountBankAccount: '10000',
  currencyUnit: 'ریال',
  amountPayable: '2000',
  residualAmount: '0',
};
@Component({
  selector: 'com-receive-receipt',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './receive-receipt.component.html',
})
export class ReceiveReceiptComponent implements OnInit {
  @Input()
  control!: ReceiveReceiptControl_;

  @Input()
  get receiveTotalPaymentMethod(): ReceiveReceipt {
    return this.control.value;
  }

  // controlVal:ReceiveTotalPaymentMethod

  constructor(el: ElementRef<HTMLElement>) {
    el.nativeElement.classList.add('col-span-2');
  }

  ngOnInit(): void {}
}
