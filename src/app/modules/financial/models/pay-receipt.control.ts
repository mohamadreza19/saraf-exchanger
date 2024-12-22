import { FormControl } from '@angular/forms';

export interface PayReceipt {
  checkbooksAmounts: string;
  creditPayment: string;
  cashPayment: string;
  customerSystemPayment: string;
  // exChangeOfficePayment: string;

  //
  currencyUnit: string;
  amountPayable: string;
  residualAmount: string;
}

export class PayReceiptControl_ extends FormControl {
  constructor(formState: PayReceipt | null) {
    super(formState);
  }
}
