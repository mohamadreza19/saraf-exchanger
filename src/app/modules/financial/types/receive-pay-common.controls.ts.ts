import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { AmountFormControl, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';

export interface CommonControls {
  customer: FormControl2;
  docNum: FormControl2;
  selectedCustomer_: CardControl_;
  status: FormControl2;
  docDate: FormControl2;
  docTime: FormControl2;
  currency: FormControl2;
  amountPayable: AmountFormControl;
  paymentMethods: FormControl2;
}
