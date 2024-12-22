import { Component } from '@angular/core';
import { CustomFormGroup } from '../../../../../shared/form-builder/form-builder.component';

import { FormBuilder2Component, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';

@Component({
  selector: 'app-bank-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './bank-mutate.component.html',
  styleUrl: './bank-mutate.component.scss',
})
export class BankMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const controls = {
      name: new FormControl2('', {
        type: 'text',
        label: 'نام',

        validators: [],
      }),
      logo: new FormControl2([], {
        type: 'files',
        filesLength: 1,
        label: 'لوگو',
        validators: [],

        allowedFileTypes: ['pdf', 'jpeg', 'png', 'jpg'],
      }),
      city: new FormControl2('', {
        type: 'select',
        label: 'شهر',
        validators: [],
        options: ['تهران', 'بوشهر'],
      }),
      country: new FormControl2('', {
        type: 'select',
        label: 'کشور',
        validators: [],
        options: ['ایران', 'ایران'],
      }),
      title: new FormControl2('', {
        type: 'text',
        label: 'عنوان',
        validators: [],
      }),
      isActive: new FormControl2('', {
        type: 'checkbox',
        label: 'فعال',
        validators: [],
        options: [],
      }),
      bankType: new FormControl2('', {
        type: 'select',
        label: 'نوع بانک',
        validators: [],
        options: ['بانک رمز ارز', 'بانک شهری'],
      }),
      branchCode: new FormControl2('', {
        type: 'text',
        label: 'کد شعبه',
        validators: [],
      }),
      branchName: new FormControl2('', {
        type: 'text',
        label: 'نام شعبه',
        validators: [],
      }),
      phone: new FormControl2('', {
        type: 'text',
        label: 'تلفن',
        validators: [],
      }),
      address: new FormControl2('', {
        type: 'text',
        label: 'آدرس',
        validators: [],
      }),
    };
    const form1 = new CustomFormGroup(controls, 'افزودن بانک', 'افزودن');

    this.forms.push(form1);
  }
}
