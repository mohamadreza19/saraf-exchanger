import { Injectable } from '@angular/core';
import { FormControl2, AmountFormControl } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { BankCheckBookControl_ } from '../../../models/bank-checkbook-control';
import { Customer } from 'src/app/shared/components/cards/card/models/customer.interface';
import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

import { ReceiveControls, ReceiveControls2, ReceiveControlsValues } from '../../../types/receive-controls';
import { BankCheckbook } from '../../../models/bank-checkbook.interface';
import {
  BANK_CHECKBOOK,
  CURRENCIES,
  CUSTOMER_LIST,
  PAYMENT_METHODS,
} from '../../../constants/receive-pay-common-constants';

import { ModalService } from 'src/app/core/services/modal.service';
import { PrintedReceiptComponent } from '../../../components/printed-receipt/printed-receipt.component';
import { ReceiveReceipt, ReceiveReceiptControl_ } from '../../../models/receive-receipt.control';
const fakeBankCheckbooks: BankCheckbook[] = [
  {
    bankCheckbookNumber: '32131233',
    bankName: 'صادرات',
    checkAmount: '1000000',
    currencyUnit: 'ریال',
    description: ' تست تست',
  },
];
@Injectable({
  providedIn: 'root',
})
export class ReceiveMutateService {
  public form!: CustomFormGroup;
  public form2!: CustomFormGroup;
  timeoutId: any;
  constructor(private modal: ModalService) {
    const controls = this.initializeControls1(CUSTOMER_LIST, PAYMENT_METHODS, BANK_CHECKBOOK);
    const controls2 = this.initializeControls2(controls.currency);

    this.form = new CustomFormGroup(controls, 'اطلاعات مالی', 'چاپ رسید و ادامه', () => {
      this.modal.open(PrintedReceiptComponent, {
        width: '600px',
        maxWidth: '600px',
      });
    });

    this.form2 = new CustomFormGroup(controls2, 'امزای رسید و ثبت', 'ثبت ');
    this.handleForm1ValuesChange(this.form);
    this.handleForm2ValuesChange(this.form2);
  }

  initializeControls1(
    customerList: Customer[],
    paymentMethods: string[],
    bankCheckbook: BankCheckbook[],
  ): ReceiveControls {
    const currency = new FormControl2('', {
      type: 'select',
      label: '',
      show: false,
      validators: [],
      options: ['usdt', 'ریال'],
      selectedOptionIndex: 1,
    });
    const receiveTotalPaymentMethod_ = new ReceiveReceiptControl_({
      amountBankAccount: '0',
      cashPayment: '0',
      checkbooksAmounts: '0',
      currencyUnit: 'ریال',
      amountPayable: '0',
      residualAmount: '0',
    } as ReceiveReceipt);

    return {
      customer: new FormControl2('', {
        label: 'مشتری',
        type: 'search-select',
        options: customerList.map((customer) => customer.name),
        validators: [],
      }),
      docNum: new FormControl2('21448833', {
        label: 'شماره سند',
        type: 'text',
        validators: [],
      }),
      selectedCustomer_: new CardControl_(null),
      status: new FormControl2('', {
        label: 'وضعیت',
        type: 'select',
        options: ['دریافت', 'پرداخت'],
        selectedOptionIndex: 1,
        validators: [],
      }),
      docDate: new FormControl2('', {
        label: 'تاریخ معامله',
        type: 'date',
        validators: [],
      }),
      docTime: new FormControl2('', {
        label: 'ساعت معامله',
        type: 'text',
        validators: [],
      }),
      currency: currency,
      amountPayable: new AmountFormControl(
        '',
        {
          label: 'مبلغ قابل پرداخت',
          type: 'amount',
          validators: [],
        },
        currency, // Reference to currency
      ),
      paymentMethods: new FormControl2('', {
        label: 'روش‌های پرداخت',
        type: 'multi-select',
        options: paymentMethods,
        validators: [],
      }),
      // currency => 'ریال'

      bankAccountNumber: new FormControl2('', {
        type: 'select',
        label: 'شماره حساب',
        options: ['123456789', '987654321'],
        show: false,
        validators: [],
      }),
      amountBankAccount: new FormControl2('', {
        type: 'text',
        label: 'مبلغ واریز به حساب بانکی',
        show: false,
        validators: [],
      }),

      checkbook: new BankCheckBookControl_(bankCheckbook, {
        show: false,
      }),
      // currency => 'usdt'

      cryptoCurrencyAccount: new FormControl2('', {
        type: 'select',
        label: 'شماره حساب مجازی',
        options: ['teew123456789', 'tew987654321'],
        show: false,
        validators: [],
      }),

      cryptoCurrencyAmount: new FormControl2('', {
        type: 'text',
        label: 'مبلغ واریز به حساب مجازی',
        show: false,
        validators: [],
      }),
      // currency => 'ریال'| 'usdt'
      cashPayment: new FormControl2('', {
        type: 'text',
        label: 'پرداخت نقدی',
        validators: [],
        show: false,
      }),

      receiveReceipt: receiveTotalPaymentMethod_,
    };
  }
  initializeControls2(currency: FormControl2): ReceiveControls2 {
    return {
      receiverName: new FormControl2('', {
        label: 'نام کامل تحویل گیرنده',
        type: 'search-select',
        validators: [],
        options: ['رضا', 'علی'],
      }),
      receiveMethod: new FormControl2('', {
        label: 'روش دریافت',
        type: 'select',
        options: ['حضوری', 'در محل خرید'],
        validators: [],
      }),
      travelExpense: new AmountFormControl(
        '',
        {
          label: 'هزینه رفت و آمد',
          type: 'amount',
          validators: [],
        },
        currency,
      ),
      fee: new AmountFormControl(
        '',
        {
          label: 'کارمزد',
          type: 'amount',
          validators: [],
        },
        currency, // Reference to currency
      ),
      receiverPicture: new FormControl2('', {
        label: 'عکس دریافت کننده',
        type: 'files',
        filesLength: 1,
        validators: [],
      }),
      receipt: new FormControl2('', {
        label: 'بارگذاری رسید امضا شده همراه کارت ملی',
        type: 'files',
        filesLength: 1,
        validators: [],
      }),
      //

      receiverFullName: new FormControl2('', {
        label: 'نام کامل دریافت کننده',
        type: 'text',
        validators: [],
        show: false,
      }),
      receiverPhoneNumber: new FormControl2('', {
        label: 'تلفن دریافت کننده',
        type: 'phone-number',
        validators: [],
        show: false,
      }),
      isReceiverCustomer: new FormControl2(true, {
        label: 'دریافت کننده خود مشتری هست',
        type: 'checkbox',
        validators: [],
      }),
    };
  }
  handleForm1ValuesChange(form1: CustomFormGroup) {
    const controls: ReceiveControls = form1.controls as any;

    // CUSTOMER SELECT
    controls.customer.valueChanges.subscribe((customerNames: string[]) =>
      this.handleSelectCustomer(controls.selectedCustomer_, customerNames, CUSTOMER_LIST),
    );
    controls.paymentMethods.valueChanges.subscribe((paymentMethods: string[]) => {
      switch (controls['currency'].value) {
        case CURRENCIES.RIAL:
          this.updateControlsVisibilityForRial(paymentMethods, controls);

          break;
        case CURRENCIES.USDT:
          // receivePayMutateService.handleAddDynamicPaymentControlsCryptoCurrency(value, controls);
          break;
      }
    });

    form1.valueChanges.subscribe((values: ReceiveControlsValues) => {
      // console.log('values', values);
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.handleCalculateReceipt2(controls);
      }, 600);
    });
  }
  handleForm2ValuesChange(form2: CustomFormGroup) {
    const controls: ReceiveControls2 = form2.controls as any;

    controls.isReceiverCustomer.valueChanges.subscribe((val: boolean) => {
      if (!val) {
        controls.receiverFullName.show = true;
        controls.receiverPhoneNumber.show = true;
      } else {
        controls.receiverFullName.show = false;
        controls.receiverPhoneNumber.show = false;
      }
    });
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
  handleShowDynamicControlsBasedRial(paymentMethods: string[], controls: ReceiveControls) {
    if (paymentMethods.includes('چک')) controls.checkbook.show = true;
    else controls.checkbook.show = false;

    if (paymentMethods.includes('پرداخت نقدی')) controls.cashPayment.show = true;
    else controls.cashPayment.show = false;

    if (paymentMethods.includes('واریز به حساب')) {
      controls.bankAccountNumber.show = true;
      controls.amountBankAccount.show = true;
    } else {
      controls.bankAccountNumber.show = false;
      controls.amountBankAccount.show = false;
    }
  }
  updateControlsVisibilityForRial(paymentMethods: string[], controls: ReceiveControls): void {
    this.toggleControlVisibility(controls.checkbook, paymentMethods.includes('چک'));
    this.toggleControlVisibility(controls.cashPayment, paymentMethods.includes('پرداخت نقدی'));
    this.toggleControlVisibility(controls.bankAccountNumber, paymentMethods.includes('واریز به حساب'));
    this.toggleControlVisibility(controls.amountBankAccount, paymentMethods.includes('واریز به حساب'));

    console.log(controls);
  }

  updateControlsVisibilityForCrypto(paymentMethods: string[], controls: ReceiveControls): void {
    this.toggleControlVisibility(controls.cryptoCurrencyAccount, true);
    this.toggleControlVisibility(controls.cryptoCurrencyAmount, true);
  }

  handleCalculateReceipt2(controls: ReceiveControls) {
    const receiptControl = controls.receiveReceipt;

    const { currency } = controls;

    if (currency.value === 'ریال') {
      let amountPayable: string = '0';
      let amountBankAccount: string = '0';
      let cashPayment: string = '0';
      let checkbooksAmounts: string = '0';
      // const { amountPayable, amountBankAccount, cashPayment , checkbook} = controls;

      if (controls.amountBankAccount.show) {
        amountBankAccount = controls.amountBankAccount.value || '0';
      }
      if (controls.cashPayment.show) {
        cashPayment = controls.cashPayment.value || '0';
      }
      if (controls.checkbook.show) {
        checkbooksAmounts = this._calculateAllCheckbookAmounts(controls.checkbook.value) || '0';
      }
      amountPayable = controls.amountPayable.value || '0';

      const residualAmount = Number(amountPayable) - this._sum([amountBankAccount, cashPayment, checkbooksAmounts]);
      const receipt: ReceiveReceipt = {
        amountBankAccount: amountBankAccount,
        cashPayment: cashPayment,
        currencyUnit: currency.value,
        checkbooksAmounts: checkbooksAmounts,
        amountPayable: amountPayable,
        residualAmount: String(residualAmount),
        // residualAmount: `10`,
      };

      receiptControl.setValue(receipt);
    }
  }
  private toggleControlVisibility(control: any, isVisible: boolean): void {
    control.show = isVisible;
  }
  private _calculateAllCheckbookAmounts(checkbooks: BankCheckbook[]) {
    const totalCheckAmount = checkbooks.reduce((total, item) => {
      // Remove commas and convert checkAmount to a number
      const amount = Number(item.checkAmount.replace(/,/g, ''));
      total += amount;

      return total;
    }, 0); // Start with an initial value of 0
    return String(totalCheckAmount);
  }
  private _sum(values: string[]) {
    let total: number = 0;
    for (let value of values) {
      const number = Number(value);
      if (number) {
        total += number;
      }
    }

    return total;
  }
}
