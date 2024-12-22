import { FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CommonControls } from './receive-pay-common.controls.ts.js';
import { BankCheckBookControl_ } from '../models/bank-checkbook-control';
import { PayReceipt, PayReceiptControl_ } from '../models/pay-receipt.control.js';

interface DynamicCreditPaymentControls {
  creditPayment: FormControl2;
}
interface DynamicCustomerSystemPaymentControls {
  customerSystemPayment: FormControl2;
}
interface DynamicExChangeOfficePaymentControls {
  exChangeOfficePayment: FormControl2;
}
interface DynamicCashPaymentControls {
  cashPayment: FormControl2;
}
interface DynamicCheckbookPaymentControls {
  checkbookPayment: BankCheckBookControl_;
}
type DynamicUnCryptoCurrencyControls = DynamicCreditPaymentControls &
  DynamicCustomerSystemPaymentControls &
  DynamicExChangeOfficePaymentControls &
  DynamicCashPaymentControls &
  DynamicCheckbookPaymentControls;

export interface PayControls extends CommonControls, DynamicUnCryptoCurrencyControls {
  payReceipt: PayReceiptControl_;
}

export interface PayControls2 {
  recipientEmployee: FormControl2;
  payMethod: FormControl2;

  //
  travelExpense: FormControl2;
  fee: FormControl2;
  //
  isPayerCustomer: FormControl2;

  // isPayerCustomer => false

  payerFullName: FormControl2;
  payerPhoneNumber: FormControl2;
  receipt: FormControl2;
}
