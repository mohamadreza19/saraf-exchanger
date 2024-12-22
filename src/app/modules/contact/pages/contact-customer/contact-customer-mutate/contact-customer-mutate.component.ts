import { Component } from '@angular/core';
import { CustomFormGroup, FormBuilderComponent } from '../../../../../shared/form-builder/form-builder.component';
import { FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';

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
      userType: new FormControl2('', {
        label: 'انتخاب مخاطب',
        type: 'select',
        options: ['همه کارمندان', ' همه صرافی ها', 'انتخاب کارمند', 'انتخاب صراف'],
        selectedOptionIndex: 0,

        validators: [],
      }),
      files: new FormControl2([], {
        label: 'بارگزاری فایل',
        type: 'files',
        filesLength: 1,
        allowedFileTypes: ['jpeg', 'jpg', 'png'],

        validators: [],
      }),
      // employee: new FormControl2('', {
      //   label: 'انتخاب کارمند',
      //   type: 'multi-select',
      //   options: ['علی رضایی', 'رضا مرادی'],
      //   showIf: ['userType', 'انتخاب کارمند'],
      //   validators: [],
      // }),
      // exchangeOffice: new FormControl2('', {
      //   label: 'انتخاب صراف',
      //   type: 'multi-select',
      //   options: ['نوا ', 'تبدیل'],
      //   showIf: ['userType', 'انتخاب صراف'],
      //   validators: [],
      // }),

      subject: new FormControl2('', {
        label: 'موضوع',
        type: 'text',
        options: [],

        validators: [],
      }),
      priority: new FormControl2('', {
        label: 'درجه اهمیت',
        type: 'select',
        options: ['بالا', 'متوسط', 'کم'],

        validators: [],
      }),
    };

    const form1 = new CustomFormGroup(controls, 'ثبت تماس با مشتری', 'ثبت');

    this.forms.push(form1);
  }
}
