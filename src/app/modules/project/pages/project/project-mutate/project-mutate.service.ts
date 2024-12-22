import { Injectable } from '@angular/core';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { Controls } from './types/controls';
import { AmountFormControl, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CURRENCIES, CUSTOMER_LIST } from 'src/app/modules/financial/constants/receive-pay-common-constants';
import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { DEAL_TYPE } from './constants';
import { Customer } from 'src/app/shared/components/cards/card/models/customer.interface';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ProjectMutateService {
  form1!: CustomFormGroup;
  form2!: CustomFormGroup;
  constructor() {
    const controls = this.initializeControls(CUSTOMER_LIST);

    this.form1 = new CustomFormGroup(controls, 'خرید/ فروش', 'ثبت موقت');
    this.form1ValuesChange(this.form1);
  }

  initializeControls(customers: Customer[]): Controls {
    const docNum = new FormControl2('12334', {
      type: 'text',
      label: 'شماره سند',
      validators: [],
    });
    docNum.disable();
    const currencyUnit = new FormControl2('', {
      label: '',
      type: 'select',
      show: false,
      options: Object.values(CURRENCIES),
      validators: [],
    });
    const currencyUnit2 = new FormControl2('', {
      label: '',
      type: 'select',
      show: false,
      options: Object.values(CURRENCIES),
      validators: [],
    });

    return {
      customer: new FormControl2('', {
        label: 'مشتری',
        type: 'search-select',
        options: customers.map((c) => c.name),
        validators: [],
      }),
      docNum: docNum,
      selectedCustomer_: new CardControl_(null),
      dealType: new FormControl2('', {
        type: 'select',
        label: 'نوع معامله',
        validators: [],
        options: DEAL_TYPE,
      }),

      docDate: new FormControl2('', {
        type: 'date',
        label: 'تاریخ سند',
        validators: [],
      }),
      docTime: new FormControl2('', {
        type: 'date',
        label: 'ساعت سند',
        validators: [],
      }),
      //
      amount: new AmountFormControl(
        '',
        {
          type: 'amount',
          label: 'واحد پول اول',
          validators: [],
        },
        currencyUnit,
      ),
      currencyUnit: currencyUnit,
      //
      amount2: new AmountFormControl(
        '',
        {
          type: 'amount',
          label: 'واحد پول دوم',
          validators: [],
        },
        currencyUnit2,
      ),
      currencyUnit2: currencyUnit2,

      //
      discount: new FormControl2('', {
        type: 'text',
        label: 'تخفیف واحد پول دوم',
        validators: [],
      }),
      fee: new FormControl2('', {
        type: 'text',
        label: 'کارمزد واحد پول دوم',

        validators: [],
      }),
      chosenRate: new FormControl2(null, {
        type: 'financial-rate',
        label: 'نرخ',
        validators: [],
      }),
    };
  }
  form1ValuesChange(form1: FormGroup) {
    const controls: Controls = form1.controls as any;

    controls.customer.valueChanges.subscribe((customerNames: string[]) =>
      this.handleSelectCustomer(controls.selectedCustomer_, customerNames, CUSTOMER_LIST),
    );
  }
  handleSelectCustomer(selectedCustomer_: CardControl_, chosenCustomerNames: string[], customerList: Customer[]) {
    if (!chosenCustomerNames.length) return selectedCustomer_.setValue(null);

    for (let customerName of chosenCustomerNames) {
      for (let customer of customerList) {
        if (customer.name == customerName) {
          selectedCustomer_.setValue(customer);

          break;
        }
      }
    }
  }
}
