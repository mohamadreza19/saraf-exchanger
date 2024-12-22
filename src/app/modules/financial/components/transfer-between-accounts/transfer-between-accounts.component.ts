import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from '../../../../shared/form-builder/form-builder.component';

@Component({
  selector: 'app-transfer-between-accounts',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './transfer-between-accounts.component.html',
  styleUrl: './transfer-between-accounts.component.css',
})
export class TransferBetweenAccountsComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const controls = {
      treasurySelect: new CustomFormControl('', {
        type: 'select',
        label: 'صندوق / خزانه',
        options: ['صندوق 1', 'صندوق 2'],

        validators: [],
      }),
      amountForTransfer: new CustomFormControl('', {
        type: 'text',
        label: 'مقدار مورد نیاز برای انتقال',

        validators: [],
      }),
    };
    this.forms.push(new CustomFormGroup(controls, 'جابجایی به حساب', 'جابجایی'));
  }
}
