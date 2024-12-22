import { Component, ElementRef, input, Input, OnInit } from '@angular/core';

import { CommonModule, NgTemplateOutlet } from '@angular/common';

import { PayReceipt, PayReceiptControl_ } from '../../models/pay-receipt.control';
const data: PayReceipt = {
  cashPayment: '10000',
  checkbooksAmounts: '20000',
  creditPayment: '0',
  customerSystemPayment: '0',
  // exChangeOfficePayment: '0',
  currencyUnit: 'ریال',
  amountPayable: '2000',
  residualAmount: '0',
};
@Component({
  selector: 'com-pay-receipt',
  standalone: true,
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './pay-receipt.component.html',
})
export class PayReceiptComponent implements OnInit {
  @Input()
  control!: PayReceiptControl_;

  @Input()
  get receiveTotalPaymentMethod(): PayReceipt {
    return this.control.value;
  }

  // controlVal:ReceiveTotalPaymentMethod

  constructor(el: ElementRef<HTMLElement>) {
    el.nativeElement.classList.add('col-span-2');
  }

  ngOnInit(): void {}
}
