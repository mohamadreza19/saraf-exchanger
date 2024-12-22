import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from 'src/app/shared/form-builder/form-builder.component';
import {
  FormBuilder2Component,
  FormControl2,
} from '../../../../../shared/components/form-builder2/form-builder2.component';

@Component({
  selector: 'app-currency-mutate',
  standalone: true,
  imports: [FormBuilderComponent, FormBuilder2Component],
  templateUrl: './currency-mutate.component.html',
})
export class CurrencyMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const controls = {
      name: new FormControl2('', {
        type: 'text',
        label: 'نام',

        validators: [],
      }),
      // logo: new CustomFormControl([], {
      //   type: 'files',
      //   filesLength: 1,
      //   label: 'لوگو',
      //   allowedFileTypes: ['jpeg', 'png'],
      //   validators: [],
      //   showIf: [],
      // }),
      acronym: new FormControl2('', {
        type: 'text',
        label: 'کد ارز',

        validators: [],
      }),
      baseCurrency: new FormControl2('', {
        type: 'text',
        label: 'عنوان مستعار ارز',

        validators: [],
      }),
      rateToBaseCurrency: new FormControl2('', {
        type: 'select',
        label: 'ترتیب نمایش',
        options: ['فعال', 'غیرفعال'],

        validators: [],
      }),
    };
    const form1 = new CustomFormGroup(controls, 'افزودن ارز', 'افزودن');

    this.forms.push(form1);
  }
}
