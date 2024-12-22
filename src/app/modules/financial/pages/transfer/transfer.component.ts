import { Component } from '@angular/core';
import {
  FormBuilder2Component,
  FormControl2,
} from '../../../../shared/components/form-builder2/form-builder2.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { Router } from '@angular/router';
import { CURRENCIES } from '../../constants/receive-pay-common-constants';

@Component({
  selector: 'app-transfer',
  standalone: true,
  imports: [TableComponent, HeaderButtonsComponent],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.css',
})
export class TransferComponent {
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
    const form = new CustomFormGroup(controls);
    this.tableConfig = {
      tableHeader: ['مشتری اصلی', 'ذینفعان', 'مبلغ اعلام شده برای واریز'],
      form: form,
      tableBody: [
        {
          mainCustomer: 'Ali Rezaei',
          beneficiaries: 'Mohammad Hosseini, Zahra Alavi',
          declaredAmount: '1,000,000 تومان',
        },
        {
          mainCustomer: 'Zahra Ahmadi',
          beneficiaries: 'Sara Naderi, Ali Sharifi',
          declaredAmount: '2,500,000 تومان',
        },
        {
          mainCustomer: 'Mohammad Amini',
          beneficiaries: 'Fatemeh Salimi',
          declaredAmount: '3,000,000 تومان',
        },
      ],
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
          label: 'دریافت و پرداخت',
        },
        {
          callback(row) {},
          label: 'همه اطلاعات',
          styleProps: {
            tone: 'info',
          },
        },
      ],

      title: 'انتقال ها',
    };
  }
  navAdd() {
    this.router.navigate(['/financial/transfer/add']);
  }
  navDash() {
    this.router.navigate(['/dashboard']);
  }
}
