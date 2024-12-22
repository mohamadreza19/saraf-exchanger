import { Component } from '@angular/core';
import { FormBuilder2Component, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'app-shareholder-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './shareholder-mutate.component.html',
  styleUrl: './shareholder-mutate.component.css',
})
export class ShareholderMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    this.forms = [this.generateShareholderForm()];
  }

  generateShareholderForm() {
    const controls = {
      firstName: new FormControl2('', {
        type: 'text',
        label: 'نام',

        validators: [],
      }),
      lastName: new FormControl2('', {
        type: 'text',
        label: 'نام خانوادگی',

        validators: [],
      }),
      mobileNumber: new FormControl2('', {
        type: 'phone-number',
        label: 'شماره همراه',

        validators: [],
      }),
      nationalCode: new FormControl2('', {
        type: 'text',
        label: 'کد ملی',

        validators: [],
      }),
      shareCount: new FormControl2('', {
        type: 'text',
        label: 'تعداد سهام',

        validators: [],
      }),
      amount: new FormControl2('', {
        type: 'text',

        label: 'مبلغ',
        validators: [],
      }),
    };

    return new CustomFormGroup(controls, 'افزودن سهام‌دار', 'ذخیره');
  }
}
