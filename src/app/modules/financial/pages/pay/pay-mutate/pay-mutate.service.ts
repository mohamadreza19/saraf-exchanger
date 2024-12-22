import { Injectable } from '@angular/core';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { PayControls, PayControls2 } from '../../../types/pay-controls';
import { Customer } from 'src/app/shared/components/cards/card/models/customer.interface';
import { BankCheckbook } from '../../../models/bank-checkbook.interface';
// import { ReceiveTotalPaymentMethod, ReceiveTotalPaymentMethodControl_ } from '../../../models/receive-receipt.control';
import { AmountFormControl, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { BankCheckBookControl_ } from '../../../models/bank-checkbook-control';
import {
  BANK_CHECKBOOK,
  CURRENCIES,
  CUSTOMER_LIST,
  PAYMENT_METHODS,
  PAYMENT_METHODS2,
} from '../../../constants/receive-pay-common-constants';
import { ReceiveReceipt, ReceiveReceiptControl_ } from '../../../models/receive-receipt.control';
import { PayReceipt, PayReceiptControl_ } from '../../../models/pay-receipt.control';
import { FormGroup } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';
import { PrintedReceiptComponent } from '../../../components/printed-receipt/printed-receipt.component';

@Injectable({
  providedIn: 'root',
})
export class PayMutateService {
  form1!: CustomFormGroup;
  form2!: CustomFormGroup;
  timeoutId: any;
  constructor(modal: ModalService) {
    const controls = this.initiateControls(CUSTOMER_LIST, PAYMENT_METHODS2, BANK_CHECKBOOK);
    const controls2 = this.initializeControls2(controls.currency);
    this.form1 = new CustomFormGroup(controls, 'اطلاعات اولیه', 'چاپ رسید و ادامه', () => {
      modal.open(PrintedReceiptComponent, {
        width: '600px',
        maxWidth: '600px',
      });
    });
    this.form2 = new CustomFormGroup(controls2, 'امزای رسید و ثبت', 'ثبت ');

    this.form1ValuesChange(this.form1);
    this.form2ValuesChange(this.form2);
  }

  initiateControls(customerList: Customer[], paymentMethods: string[], bankCheckbook: BankCheckbook[]): PayControls {
    const currency = new FormControl2('', {
      type: 'select',
      label: '',
      show: false,
      validators: [],
      options: Object.values(CURRENCIES),
      selectedOptionIndex: 1,
    });
    const payReceipt = new PayReceiptControl_({
      currencyUnit: 'ریال',
      cashPayment: '0',
      creditPayment: '0',
      customerSystemPayment: '0',
      checkbooksAmounts: '0',
      amountPayable: '0',

      residualAmount: '0',
    } as PayReceipt);
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
      cashPayment: new FormControl2('', {
        label: 'پرداخت نقدی',
        type: 'text',
        options: paymentMethods,
        validators: [],
        show: false,
      }),
      checkbookPayment: new BankCheckBookControl_(bankCheckbook, {
        show: false,
      }),
      creditPayment: new FormControl2('', {
        label: 'پرداخت از اعتبار',
        type: 'text',
        validators: [],
        show: false,
      }),
      customerSystemPayment: new FormControl2('', {
        label: 'پرداخت از سامانه مشتری',
        type: 'text',
        validators: [],
        show: false,
      }),
      exChangeOfficePayment: new FormControl2('', {
        label: 'واریز به حساب صرافی',
        type: 'text',
        validators: [],
        show: false,
      }),
      payReceipt: payReceipt,
    };
  }
  initializeControls2(currency: FormControl2): PayControls2 {
    return {
      recipientEmployee: new FormControl2('', {
        label: 'کارمند دریافت کننده',
        type: 'search-select',
        validators: [],
        options: ['رضا', 'علی'],
      }),
      payMethod: new FormControl2('', {
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

      receipt: new FormControl2('', {
        label: 'بارگذاری رسید امضا شده همراه کارت ملی',
        type: 'files',
        filesLength: 1,
        validators: [],
      }),
      //

      payerFullName: new FormControl2('', {
        label: 'نام کامل پرداخت کننده',
        type: 'text',
        validators: [],
        show: false,
      }),
      payerPhoneNumber: new FormControl2('', {
        label: 'تلفن پرداخت کننده',
        type: 'phone-number',
        validators: [],
        show: false,
      }),
      isPayerCustomer: new FormControl2(true, {
        label: 'پرداخت کننده خود مشتری هست',
        type: 'checkbox',
        validators: [],
      }),
    };
  }
  form1ValuesChange(form1: FormGroup) {
    const controls: PayControls = form1.controls as any;

    controls.customer.valueChanges.subscribe((customerNames: string[]) =>
      this.handleSelectCustomer(controls.selectedCustomer_, customerNames, CUSTOMER_LIST),
    );
    controls.paymentMethods.valueChanges.subscribe((paymentMethods: string[]) => {
      this.updateControlsVisibilityForDirhamCurrency(paymentMethods, controls);
      // switch (controls['currency'].value) {
      //   case CURRENCIES.RIAL:

      //     break;
      //   case CURRENCIES.USDT:
      //     // receivePayMutateService.handleAddDynamicPaymentControlsCryptoCurrency(value, controls);
      //     break;
      // }
    });

    form1.valueChanges.subscribe((_) => {
      // console.log('values', values);
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.handleCalculateReceipt(controls);
      }, 600);
    });
  }
  form2ValuesChange(form2: CustomFormGroup) {
    const controls: PayControls2 = form2.controls as any;

    controls.isPayerCustomer.valueChanges.subscribe((val: boolean) => {
      if (!val) {
        controls.payerPhoneNumber.show = true;
        controls.payerFullName.show = true;
      } else {
        controls.payerPhoneNumber.show = false;
        controls.payerFullName.show = false;
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
  updateControlsVisibilityForDirhamCurrency(paymentMethods: string[], controls: PayControls) {
    this.toggleControlVisibility(controls.checkbookPayment, paymentMethods.includes('چک'));
    this.toggleControlVisibility(controls.cashPayment, paymentMethods.includes('پرداخت نقدی'));
    this.toggleControlVisibility(
      controls.customerSystemPayment,
      paymentMethods.includes('پرداخت از حساب سامانه مشتری'),
    );
    this.toggleControlVisibility(controls.creditPayment, paymentMethods.includes('پرداخت از اعتبار'));
  }
  private toggleControlVisibility(control: any, isVisible: boolean): void {
    control.show = isVisible;
  }

  handleCalculateReceipt(controls: PayControls) {
    const receiptControl = controls.payReceipt;

    const { currency } = controls;

    let receipt: PayReceipt = {
      currencyUnit: currency.value,
      cashPayment: '0',
      creditPayment: '0',
      customerSystemPayment: '0',
      checkbooksAmounts: '0',
      amountPayable: '0',
      residualAmount: '0',
    };

    // const { amountPayable, amountBankAccount, cashPayment , checkbook} = controls;

    if (controls.cashPayment.show) {
      receipt.cashPayment = controls.cashPayment.value || '0';
    }
    if (controls.creditPayment.show) {
      receipt.creditPayment = controls.creditPayment.value || '0';
    }
    if (controls.customerSystemPayment.show) {
      receipt.customerSystemPayment = controls.customerSystemPayment.value || '0';
    }
    if (controls.customerSystemPayment.show) {
      receipt.customerSystemPayment = controls.customerSystemPayment.value || '0';
    }
    if (controls.checkbookPayment.show) {
      receipt.checkbooksAmounts = this._calculateAllCheckbookAmounts(controls.checkbookPayment.value) || '0';
    }
    receipt.amountPayable = controls.amountPayable.value || '0';

    const residualAmount =
      Number(receipt.amountPayable) -
      this._sum([receipt.cashPayment, receipt.creditPayment, receipt.customerSystemPayment, receipt.checkbooksAmounts]);

    receipt.residualAmount = String(residualAmount);

    receiptControl.setValue(receipt);
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
