import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'app-currency-mutate',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './currency-mutate.component.html',
})
export class CurrencyMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const controls = {
      name: new CustomFormControl('', {
        type: 'text',
        label: 'نام',
        showIf: [],
        validators: [],
      }),
      logo: new CustomFormControl([], {
        type: 'files',
        filesLength: 1,
        label: 'لوگو',
        allowedFileTypes: ['jpeg', 'png'],
        validators: [],
        showIf: [],
      }),
      acronym: new CustomFormControl('', {
        type: 'text',
        label: 'اختصار',
        showIf: [],
        validators: [],
      }),
      baseCurrency: new CustomFormControl('', {
        type: 'text',
        label: 'ارز پایه',
        showIf: [],
        validators: [],
      }),
      rateToBaseCurrency: new CustomFormControl('', {
        type: 'text',
        label: 'ضریب نسبت به ارز مبنا',
        showIf: [],
        validators: [],
      }),
    };
    const form1 = new CustomFormGroup(controls, 'افزودن ارز', 'افزودن');

    this.forms.push(form1);
  }
}
