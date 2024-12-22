import { FormControl } from '@angular/forms';
import { BankCheckbook } from './bank-checkbook.interface';
import { BehaviorSubject } from 'rxjs';

export class BankCheckBookControl_ extends FormControl {
  private _show = new BehaviorSubject<boolean>(true);
  show$ = this._show.asObservable();

  get show(): boolean {
    return this._show.value;
  }
  set show(value: boolean) {
    this._show.next(value); // Notify subscribers of the change
  }
  constructor(
    formState: BankCheckbook[] | null,
    config: {
      show?: boolean;
    },
  ) {
    super(formState);
    if (typeof config.show === 'boolean') {
      this.show = config.show;
    } else {
      this.show = true;
    }
  }
}
