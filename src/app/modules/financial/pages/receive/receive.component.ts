import { Component } from '@angular/core';
import { FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { ExchangeTableItemComponent } from '../../../dashboard/components/view/exchange-table-item/exchange-table-item.component';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';
import { Router } from '@angular/router';
import { CURRENCIES } from '../../constants/receive-pay-common-constants';
const fakeData = [
  {
    customerCode: '445546',
    amount: '1,000,000,000',
    status: 'تکمیل',
  },
  {
    customerCode: '445546',
    amount: '1,000,000,000',
    status: 'تکمیل نشده',
  },
];
@Component({
  selector: 'app-receive-pay',
  standalone: true,
  imports: [HeaderButtonsComponent, ExchangeTableItemComponent, TableComponent],
  templateUrl: './receive.component.html',
})
export class ReceiveComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router) {
    const controls = {
      search: new FormControl2('', {
        label: 'جستوجو',
        type: 'search',
        validators: [],
      }),
      fromDate: new FormControl2('', {
        label: 'از تاریخ',
        type: 'date',
        validators: [],
      }),
      toDate: new FormControl2('', {
        label: 'تا تاریخ',
        type: 'date',
        validators: [],
      }),
      amount: new FormControl2('', {
        label: 'مبلغ کل واریزی',
        type: 'text',
        validators: [],
      }),
      amountUnit: new FormControl2('', {
        label: 'واحد مبلغ',
        type: 'select',
        options: Object.values(CURRENCIES),
        validators: [],
      }),
    };
    this.tableConfig = {
      title: 'دریافت',
      form: new CustomFormGroup(controls),
      tableHeader: ['کد مشتری', 'مبلغ کل', 'وضعیت'],
      tableBody: fakeData,
      customStylePerColumnVal: {
        تکمیل: ' p-1 text-green-800 bg-green-100 rounded-md ',
        'تکمیل نشده': ' p-1 text-red-800 bg-red-100 rounded-md ',
      },
      actions: [
        {
          callback(row) {},
          label: 'ویرایش',
          styleProps: {
            tone: 'warning',
          },
        },
        {
          callback(row) {},
          label: 'اطلاعات کامل',
          styleProps: {},
        },
        {
          callback(row) {},
          label: 'بارگزاری رسید',
          styleProps: {
            tone: 'light',
          },
        },
      ],
    };
  }
  navDash() {
    this.router.navigate(['/dashboard/']);
  }

  navAdd() {
    this.router.navigate(['/financial/receive/add']);
  }
}
