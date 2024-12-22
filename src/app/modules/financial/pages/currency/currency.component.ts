import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeTableComponent } from 'src/app/modules/dashboard/components/view/exchange-table/exchange-table.component';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { CurrencyUnit } from 'src/app/shared/models/currency-unit.interface';
import { TableConfig } from 'src/app/shared/models/table-config';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [ExchangeTableComponent, HeaderButtonsComponent, TableComponent],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router) {
    this.tableConfig = {
      title: 'ارز ها',
      form: this.generateTableForm(),
      tableHeader: [
        'کد ارز ',
        'عنوان ارز',
        'عنوان مستعار',
        'فعال / غیرفعال',
        'نوع',
        'ثبت ضریب ارز نسبت به ارز مبنا (دلار)',
      ],
      tableBody: [
        {
          currencyCode: 'USD',
          currencyName: 'دلار',
          currencyNicName: 'دلار آمریکا',
          order: 'فعال',
          type: 'رسمی',
          rateToBaseCurrency: '1.06',
        },
        {
          currencyCode: 'USD',
          currencyName: 'دلار',
          currencyNicName: 'دلار آمریکا',
          order: 'غیرفعال',
          type: 'شخصی',
          rateToBaseCurrency: '1.06',
        },
      ],
      customStylePerColumnVal: {
        فعال: 'p-1 rounded-lg bg-primary text-background',
        غیرفعال: 'p-1 rounded-lg bg-muted text-background',
      },
      actions: [],
    };
  }
  navigateToAddCurrency() {
    this.router.navigate(['/financial/currency/add']);
  }
  backToDash() {
    this.router.navigate(['/dashboard']);
  }
  generateTableForm() {
    const controls = {
      search: new CustomFormControl('', {
        label: 'جستوجو',
        type: 'search',

        validators: [],
      }),
      currencyOrder: new CustomFormControl('', {
        type: 'select',
        label: 'ترتیب نمایش',
        options: ['غیرفعال', 'فعال'],

        validators: [],
      }),
      currencyOrderType: new CustomFormControl('', {
        type: 'select',
        label: 'نوع',
        options: ['رسمی', 'شخصی'],

        validators: [],
      }),
    };
    return new CustomFormGroup(controls);
  }
}
