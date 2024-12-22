import { FormControl } from '@angular/forms';
import { Receipt } from './receipt.interface';

export class ReceiptControl_ extends FormControl {
  constructor(formState: Receipt | null) {
    super(formState);
  }
}
