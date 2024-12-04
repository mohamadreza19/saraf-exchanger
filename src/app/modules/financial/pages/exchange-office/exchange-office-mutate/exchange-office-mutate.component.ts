import { Component, Input } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from 'src/app/shared/form-builder/form-builder.component';
import { FormBuilderConfig, FormConfig, Input as FormInput } from 'src/app/shared/models/form-builder-config.interface';

@Component({
  selector: 'app-exchange-office-mutate',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './exchange-office-mutate.component.html',
})
export class ExchangeOfficeMutateComponent {
  forms: CustomFormGroup[] = [];
  constructor() {
    const controls = {
      name: new CustomFormControl('', {
        type: 'text',
        label: 'اسم',
        showIf: [],
        validators: [],
      }),
      file: new CustomFormControl([], {
        type: 'files',
        filesLength: 1,
        label: 'بارگزاری یا انتخاب تصویر فردی',
        validators: [],
        showIf: [],
        allowedFileTypes: ['pdf', 'jpeg', 'png', 'jpg'],
      }),
      username: new CustomFormControl('', {
        type: 'text',
        label: 'نام خانوادگی',
        validators: [],
        showIf: [],
      }),
      nicName: new CustomFormControl('', {
        type: 'text',
        label: 'نام مستعار',
        validators: [],
        showIf: [],
      }),
      phoneNumber: new CustomFormControl('', {
        type: 'text',
        label: 'شماره تماس',
        validators: [],
        showIf: [],
      }),
      gender: new CustomFormControl('', {
        type: 'select',
        label: 'جنسیت',
        validators: [],
        options: ['مذکر', 'مونثه'],
        showIf: [],
      }),
      nationality: new CustomFormControl('', {
        type: 'select',
        label: 'ملیت',
        validators: [],
        options: ['ایرانی', 'آمریکایی', 'اماراتی'],
        showIf: [],
      }),
      exchangeActivity: new CustomFormControl('', {
        type: 'checkbox',
        label: '',
        validators: [],
        options: ['صراف است'],
        showIf: [],
      }),
      nationalCode: new CustomFormControl('', {
        type: 'text',
        label: 'کد ملی',
        validators: [],
        showIf: [],
      }),
      fatherName: new CustomFormControl('', {
        type: 'text',
        label: 'نام پدر',
        validators: [],
        showIf: [],
      }),
      bornDate: new CustomFormControl('', {
        type: 'date',
        label: 'تاریخ تولد',
        validators: [],
        showIf: [],
      }),
      email: new CustomFormControl('', {
        type: 'email',
        label: 'ایمیل',
        validators: [],
        showIf: [],
      }),
      country: new CustomFormControl('', {
        type: 'select',
        label: 'کشور',
        validators: [],
        options: ['ایران', ' آمریکا', 'امارات'],
        showIf: [],
      }),
      city: new CustomFormControl('', {
        type: 'select',
        label: 'شهر',
        validators: [],
        options: ['تهران', 'بوشهر'],
        showIf: [],
      }),
      address: new CustomFormControl('', {
        type: 'text',
        label: 'آدرس',
        validators: [],
        showIf: [],
      }),
      zipCode: new CustomFormControl('', {
        type: 'text',
        label: 'کدپستی',
        validators: [],
        showIf: [],
      }),
      userType: new CustomFormControl('', {
        type: 'radio',
        label: 'نوع کاربر',
        validators: [],
        options: ['حقیقی', 'حقوقی'],
        showIf: [],
      }),
      companyOrStoreName: new CustomFormControl('', {
        type: 'text',
        label: 'نام شرکت  / فروشگاه',
        validators: [],
        showIf: ['userType', 'حقوقی'],
      }),
      companyPhoneNumber: new CustomFormControl('', {
        type: 'text',
        label: 'شماره تماس',
        validators: [],
        showIf: ['userType', 'حقوقی'],
      }),
      companyEmail: new CustomFormControl('', {
        type: 'text',
        label: 'ایمیل شرکت',
        validators: [],
        showIf: ['userType', 'حقوقی'],
      }),
      companyCountry: new CustomFormControl('', {
        type: 'text',
        label: 'کشور',
        validators: [],
        showIf: ['userType', 'حقوقی'],
      }),
      companyAddress: new CustomFormControl('', {
        type: 'text',
        label: 'آدرس',
        validators: [],
        showIf: ['userType', 'حقوقی'],
      }),
      companyZipCode: new CustomFormControl('', {
        type: 'text',
        label: 'کد پستی',
        validators: [],
        showIf: ['userType', 'حقوقی'],
      }),
    };
    const controls2 = {
      requestedModule: new CustomFormControl([], {
        type: 'multi-select',
        label: 'ماژول های درخواستی',
        validators: [],
        options: ['صرافی', 'طلا', 'نقره', 'کالا'],
        showIf: [],
      }),
      renewalPeriod: new CustomFormControl('', {
        type: 'select',
        label: 'مدت تمدید',
        validators: [],
        options: ['یک ماهه', 'سه ماهه', 'شش ماهه', ' یک ساله'],
        showIf: [],
      }),
      payableAmount: new CustomFormControl('', {
        type: 'text',
        label: 'مبلغ قابل واریز',
        validators: [],
        showIf: [],
      }),
      bankAccountNumber: new CustomFormControl('', {
        type: 'text',
        label: 'شماره حساب',
        validators: [],
        showIf: [],
      }),
      bankCardNumber: new CustomFormControl('', {
        type: 'text',
        label: 'شماره کارت',
        validators: [],
        showIf: [],
      }),
      paymentStatus: new CustomFormControl('', {
        type: 'radio',
        label: 'وضعیت واریزی',
        validators: [],
        options: ['واریز انجام نشده ', 'واریز انجام شده'],
        showIf: [],
      }),
      allowPaymentWithoutReceipt: new CustomFormControl('', {
        type: 'radio',
        label: 'وضعیت تایید',
        validators: [],
        options: ['واریز بدون مدرک مورد تایید است', 'واریز بدون مدرک مورد تایید نیست'],
        showIf: ['paymentStatus', 'واریز انجام شده'],
      }),
      paymentReceipt: new CustomFormControl([], {
        type: 'files',
        filesLength: 1,
        label: 'رسید واریزی',
        validators: [],
        showIf: ['allowPaymentWithoutReceipt', 'واریز بدون مدرک مورد تایید نیست'],
      }),
    };
    const controls3 = {
      documentType: new CustomFormControl('', {
        type: 'select',
        label: 'انواع مدارک',
        validators: [],
        options: ['تاریخ دار', 'همیشگی'],
        showIf: [],
      }),
      docs: new CustomFormControl([], {
        type: 'files',
        filesLength: 10,
        label: ' بارگزاری مدارک',
        validators: [],
        showIf: [],
        allowedFileTypes: ['pdf', 'png', 'jpg', 'jpeg'],
      }),
      activeStatus: new CustomFormControl([], {
        type: 'checkbox',
        label: '',
        validators: [],
        options: ['فعال'],
        showIf: [],
      }),
    };

    const form1: CustomFormGroup = new CustomFormGroup(controls, 'اطلاعات شخصی', 'بعدی');
    const form2: CustomFormGroup = new CustomFormGroup(controls2, 'اطلاعات مالی', 'بعدی');
    const form3: CustomFormGroup = new CustomFormGroup(controls3, 'ثبت مدارک', 'ثبت');

    this.forms.push(form1);
    this.forms.push(form2);
    this.forms.push(form3);
  }
}
