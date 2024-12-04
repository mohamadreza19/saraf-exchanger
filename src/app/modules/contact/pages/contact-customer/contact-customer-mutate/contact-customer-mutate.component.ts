import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from '../../../../../shared/form-builder/form-builder.component';

@Component({
  selector: 'app-contact-customer-mutate',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './contact-customer-mutate.component.html',
  styleUrl: './contact-customer-mutate.component.scss',
})
export class ContactCustomerMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const controls = {
      userType: new CustomFormControl('', {
        label: 'انتخاب مخاطب',
        type: 'select',
        options: ['همه کارمندان', ' همه صرافی ها', 'انتخاب کارمند', 'انتخاب صراف'],
        selectedOptionIndex: 0,
        showIf: [],
        validators: [],
      }),
      files: new CustomFormControl([], {
        label: 'بارگزاری فایل',
        type: 'files',
        filesLength: 1,
        allowedFileTypes: ['jpeg', 'jpg', 'png'],
        showIf: [],
        validators: [],
      }),
      employee: new CustomFormControl('', {
        label: 'انتخاب کارمند',
        type: 'multi-select',
        options: ['علی رضایی', 'رضا مرادی'],
        showIf: ['userType', 'انتخاب کارمند'],
        validators: [],
      }),
      exchangeOffice: new CustomFormControl('', {
        label: 'انتخاب صراف',
        type: 'multi-select',
        options: ['نوا ', 'تبدیل'],
        showIf: ['userType', 'انتخاب صراف'],
        validators: [],
      }),

      subject: new CustomFormControl('', {
        label: 'موضوع',
        type: 'text',
        options: [],
        showIf: [],
        validators: [],
      }),
      priority: new CustomFormControl('', {
        label: 'درجه اهمیت',
        type: 'select',
        options: ['بالا', 'متوسط', 'کم'],
        showIf: [],
        validators: [],
      }),
    };

    const form1 = new CustomFormGroup(controls, 'ثبت تماس با مشتری', 'ثبت');

    this.forms.push(form1);
  }
}
