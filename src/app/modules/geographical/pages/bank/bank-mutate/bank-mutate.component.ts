import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from '../../../../../shared/form-builder/form-builder.component';
import { FormBuilderConfig, FormConfig } from 'src/app/shared/models/form-builder-config.interface';

@Component({
  selector: 'app-bank-mutate',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './bank-mutate.component.html',
  styleUrl: './bank-mutate.component.scss',
})
export class BankMutateComponent {
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
        validators: [],
        showIf: [],
        allowedFileTypes: ['pdf', 'jpeg', 'png', 'jpg'],
      }),
      city: new CustomFormControl('', {
        type: 'select',
        label: 'شهر',
        validators: [],
        options: ['تهران', 'بوشهر'],
        showIf: [],
      }),
      title: new CustomFormControl('', {
        type: 'text',
        label: 'عنوان',
        validators: [],
        showIf: [],
      }),
      isActive: new CustomFormControl('', {
        type: 'checkbox',
        label: '',
        validators: [],
        options: ['فعال'],
        showIf: [],
      }),
    };
    const form1 = new CustomFormGroup(controls, 'افزودن بانک', 'افزودن');

    this.forms.push(form1);
  }
}
