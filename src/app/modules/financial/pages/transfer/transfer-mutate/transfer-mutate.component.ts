import { Component } from '@angular/core';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import {
  AmountFormControl,
  FormBuilder2Component,
  FormControl2,
} from '../../../../../shared/components/form-builder2/form-builder2.component';
import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { Customer } from 'src/app/shared/components/cards/card/models/customer.interface';
import { toggleFormControlsVisibility } from 'src/app/shared/utils/toggle-form-controls-visibility.util';
const customerList: Customer[] = [
  {
    id: 1,
    name: 'علی رضایی',
    imgUrl: '/assets/images/gray-avatar-placeholder.jpg',
  },
  {
    id: 2,
    name: 'محسن نامجو',
    imgUrl: '/assets/images/gray-avatar-placeholder.jpg',
  },
  {
    id: 3,
    name: 'محسن امینی',
    imgUrl: '/assets/images/gray-avatar-placeholder.jpg',
  },
];

@Component({
  selector: 'app-transfer-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './transfer-mutate.component.html',
  styleUrl: './transfer-mutate.component.css',
})
export class TransferMutateComponent {
  docNumber!: FormControl2;
  customer!: FormControl2;
  currencyList!: FormControl2;
  selectedCustomerCom_!: CardControl_;
  forms: CustomFormGroup[] = [];

  constructor() {
    this.docNumber = new FormControl2('1312313', {
      label: 'شماره سند',
      type: 'text',
      validators: [],
      disabled: true,
    });
    this.docNumber.disable();
    this.customer = new FormControl2('', {
      label: 'مشتری',
      type: 'search-select',
      selectOptionsLength: 1,
      options: customerList.map((customer) => customer.name),
      // selectedOptionIndex: 0,
      validators: [],
    });

    this.customer.valueChanges.subscribe((customerNames) => {
      if (!customerNames.length) {
        this.selectedCustomerCom_.setValue(null);
      }

      for (let customerName of customerNames) {
        const findCustomer = customerList.find((customer) => customer.name === customerName);
        if (findCustomer) this.selectedCustomerCom_.setValue(findCustomer);
      }
    });
    this.currencyList = new FormControl2('', {
      label: '',
      type: 'select',
      options: ['usdt', 'ریال'],
      show: false,
      validators: [],
    });

    this.selectedCustomerCom_ = new CardControl_(null);

    const controls = {
      customer: this.customer,
      docNumber: this.docNumber,
      selectedCustomerCom_: this.selectedCustomerCom_,
      transactionDate: new FormControl2('', {
        label: 'تاریخ معامله',
        type: 'date',
        validators: [],
      }),
      transactionHour: new FormControl2('', {
        label: 'ساعت معامله',
        type: 'text',
        validators: [],
      }),
      beneficiaryName: new FormControl2('', {
        label: 'نام و نام خانوادگی ذینفع',
        type: 'text',
        validators: [],
      }),
    };
    const controls2 = {
      currencyList: this.currencyList,
      amount: new AmountFormControl(
        '',
        {
          label: 'مبلغ انتقال',
          type: 'amount',
          validators: [],
        },
        this.currencyList,
      ),

      bankName: new FormControl2('', {
        label: 'نام بانک',
        type: 'select',
        options: ['بانک ملی ایران', 'بانک ملت', 'بانک صادرات ایران', 'بانک تجارت', 'بانک سپه'],
        validators: [],
      }),
      bankAccountNumber: new FormControl2('', {
        label: 'شماره حساب',
        type: 'select',
        options: ['t95959554355', 't45960540459'],
        validators: [],
      }),
      country: new FormControl2('', {
        label: 'کشور',
        type: 'select',
        options: ['ایران', 'آمریکا', 'آلمان', 'فرانسه'], // Example country options
        validators: [],
      }),
      city: new FormControl2('', {
        label: 'شهر',
        type: 'text',
        validators: [],
      }),
      description: new FormControl2('', {
        label: 'توضیح',
        type: 'text', // Using textarea for potentially longer input
        validators: [],
      }),
      // // master / visa
      // foreignCardType: new FormControl2('', {
      //   type: 'select',
      //   label: 'نوع حساب',
      //   validators: [],
      //   options: ['master', 'visa'],
      //   // showIf: ['currencyUnit', 'master/visa'],
      // }),
      // foreignCardCountry: new FormControl2('', {
      //   type: 'select',
      //   label: 'کشور',
      //   validators: [],
      //   options: ['ایران', 'امریکا', 'امارات'],
      //   // showIf: ['currencyUnit', 'master/visa'],
      // }),
      // foreignCardCity: new FormControl2('', {
      //   type: 'select',
      //   label: 'شهر',
      //   validators: [],
      //   options: ['تهران', 'بوشهر'],
      //   // showIf: ['currencyUnit', 'master/visa'],
      // }),
      // // bankName: new FormControl2('', {
      // //   type: 'text',
      // //   label: 'نام بانک',
      // //   options: ['AFN Bank', 'RED bank'],
      // //   validators: [],
      // //   // showIf: ['currencyUnit', 'master/visa'],
      // // }),
      // nameOnCard: new FormControl2('', {
      //   type: 'text',
      //   label: 'نام روی کارت',
      //   validators: [],
      //   // showIf: ['currencyUnit', 'master/visa'],
      // }),
      // foreignIBAN: new FormControl2('', {
      //   type: 'text',
      //   label: 'IBAN',
      //   validators: [],
      //   // showIf: ['currencyUnit', 'master/visa'],
      // }),
      // swift: new FormControl2('', {
      //   type: 'text',
      //   label: 'SWIFT',
      //   validators: [],
      //   // showIf: ['currencyUnit', 'master/visa'],
      // }),
      // //  currency
      cryptocurrencyType: new FormControl2('', {
        type: 'select',
        label: 'رمز ارز',
        validators: [],
        options: ['BTC', 'BNB'],
        // showIf: ['currencyUnit', 'cryptocurrency'],
      }),
      cryptocurrencyTransferPlatform: new FormControl2('', {
        type: 'select',
        label: 'بستر انتقال',
        validators: [],
        options: ['TRC20', 'ERC20'],
        // showIf: ['currencyUnit', 'cryptocurrency'],
      }),
      cryptoCurrencyWalletAddress: new FormControl2('', {
        label: 'شماره حساب کیف پول',
        type: 'text',
        // showIf: ['currencyUnit', 'cryptocurrency'],
        validators: [],
      }),
      cryptocurrencyMemo: new FormControl2('', {
        label: 'memo',
        type: 'text',
        // showIf: ['currencyUnit', 'cryptocurrency'],
        validators: [],
      }),
    };

    const form = new CustomFormGroup(controls, 'اطلاعات اولیه', 'بعدی');
    const form2 = new CustomFormGroup(controls2, 'اطلاعات بانکی', 'انتقال');

    this.forms.push(form);
    this.forms.push(form2);

    this.currencyList.valueChanges.subscribe((value) => {
      switch (value) {
        case 'ریال':
          toggleFormControlsVisibility(controls2 as any, [
            'amount',
            'bankName',
            'bankAccountNumber',
            'country',
            'city',
            'description',
          ]);
          break;
        case 'usdt':
          toggleFormControlsVisibility(controls2, [
            'amount',
            'cryptocurrencyType',
            'cryptocurrencyTransferPlatform',
            'cryptoCurrencyWalletAddress',
            'cryptocurrencyMemo',
          ]);
          break;
      }

      this.currencyList.show = false;
    });
  }
}
