import { AmountFormControl, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { BankCheckBookControl_ } from '../models/bank-checkbook-control';
import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';

import { Customer } from 'src/app/shared/components/cards/card/models/customer.interface';
import { BankCheckbook } from '../models/bank-checkbook.interface';
import { CommonControls } from './receive-pay-common.controls.ts';
import { ReceiveReceiptControl_ } from '../models/receive-receipt.control';

interface DynamicBankControls {
  bankAccountNumber: FormControl2;
  amountBankAccount: FormControl2;
}

interface DynamicCryptoControls {
  cryptoCurrencyAccount: FormControl2;
  cryptoCurrencyAmount: FormControl2;
}

interface DynamicCashControls {
  cashPayment: FormControl2;
}

interface DynamicCheckbookControls {
  checkbook: BankCheckBookControl_;
}

export type DynamicRialControls = DynamicBankControls &
  DynamicCryptoControls &
  DynamicCashControls &
  DynamicCheckbookControls;

export interface ReceiveTotalPaymentMethodControl {
  receiveReceipt: ReceiveReceiptControl_;
}
//

interface DynamicCryptoCurrencyAccount {
  cryptoCurrencyAccount: FormControl2;
}

interface DynamicCryptoCurrencyAmount {
  cryptoCurrencyAmount: FormControl2;
}

export interface ReceiveControls
  extends CommonControls,
    DynamicBankControls,
    DynamicCryptoControls,
    DynamicCashControls,
    DynamicCheckbookControls,
    DynamicCryptoCurrencyAccount,
    DynamicCryptoCurrencyAmount,
    ReceiveTotalPaymentMethodControl {}

export interface ReceiveControls2 {
  receiverName: FormControl2;
  receiveMethod: FormControl2;
  travelExpense: FormControl2;
  fee: FormControl2;
  receiverPicture: FormControl2;
  receipt: FormControl2;
  //
  isReceiverCustomer: FormControl2;
  // isReceiverCustomer => true
  receiverFullName: FormControl2;
  receiverPhoneNumber: FormControl2;
}

export interface ReceiveControlsValues {
  customer: string; // Assuming the customer name is a string
  docNum: string; // Document number as string
  selectedCustomer_: Customer; // CardControl_ object for selected customer
  status: string; // Status as a string (e.g., "paid", "pending")
  docDate: string; // Date as a string (you might format the date as string)
  docTime: string; // Time as a string (e.g., "10:30 AM")
  currency: string; // Currency type as a string (e.g., "USD")
  amountPayable: string; // AmountFormControl for the amount to be paid
  paymentMethods: string; // Payment method(s) as string (e.g., "Credit Card")

  // Dynamically added fields (from the union types)
  bankAccountNumber: string; // Bank account number as string
  amountBankAccount: string; // Amount in the bank account as number

  cryptoCurrencyAccount: string; // Cryptocurrency account as string
  cryptoCurrencyAmount: string; // Cryptocurrency amount as number

  cashPayment: string; // Cash payment as string (or number, depending on the format)

  checkbook: BankCheckbook[]; // Bank checkbook control object

  receiveTotalPaymentMethod_: any; // Control for total payment method
}
