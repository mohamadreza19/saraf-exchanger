import { FormControl } from '@angular/forms';

export interface ReceiveReceipt {
  checkbooksAmounts: string;
  amountBankAccount: string;
  cashPayment: string;
  currencyUnit: string;
  amountPayable: string;
  residualAmount: string;
}

export class ReceiveReceiptControl_ extends FormControl {
  constructor(formState: ReceiveReceipt | null) {
    super(formState);
  }
}
