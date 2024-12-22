import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { HeaderButtonsComponent } from '../../../components/header-buttons/header-buttons.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import {
  FormBuilder2Component,
  FormControl2,
} from '../../../../../shared/components/form-builder2/form-builder2.component';

@Component({
  selector: 'app-cash-treasury-mutate',
  standalone: true,
  imports: [HeaderButtonsComponent, FormBuilder2Component],
  templateUrl: './cash-treasury-mutate.component.html',
  styleUrl: './cash-treasury-mutate.component.css',
})
export class CashTreasuryMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const control1 = {
      name: new FormControl2('', {
        label: 'نام',
        type: 'text',
        validators: [],
      }),
      type: new FormControl2('', {
        label: 'نوع صندوق ',
        type: 'select',
        options: ['نقدی', 'بانکی'],
        validators: [],
      }),
      description: new FormControl2('', {
        label: 'توضیحات',
        type: 'text',
        validators: [],
      }),
      isActive: new FormControl2('', {
        type: 'checkbox',
        label: 'فعال',
        options: [],
        validators: [],
      }),
    };

    const form1 = new CustomFormGroup(control1, 'تعریف صندوق  / خزانه ', 'افزودن');

    this.forms.push(form1);
  }
}
