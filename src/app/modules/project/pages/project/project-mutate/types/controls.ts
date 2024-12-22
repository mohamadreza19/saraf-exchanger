import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { AmountFormControl, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';

export interface Controls {
  customer: FormControl2;
  selectedCustomer_: CardControl_;
  //
  docNum: FormControl2;
  docDate: FormControl2;
  docTime: FormControl2;
  //
  dealType: FormControl2;
  //
  amount: FormControl2;
  currencyUnit: AmountFormControl;
  //
  chosenRate: FormControl2; // must change

  //
  amount2: FormControl2;
  currencyUnit2: AmountFormControl;
  //
  discount: FormControl2;
  fee: FormControl2;
}
