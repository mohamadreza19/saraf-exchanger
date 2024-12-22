import { Component } from '@angular/core';
import { HeaderButtonsComponent } from '../../../financial/components/header-buttons/header-buttons.component';
import { ExchangeTableComponent } from 'src/app/modules/dashboard/components/view/exchange-table/exchange-table.component';
import { Router } from '@angular/router';
import { Bank } from 'src/app/shared/models/bank-interface';
import { TableConfig } from 'src/app/shared/models/table-config';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';

@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [HeaderButtonsComponent, ExchangeTableComponent, TableComponent],
  templateUrl: './bank.component.html',
})
export class BankComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router) {
    this.tableConfig = {
      title: 'بانک‌ها',
      form: this.generateTableForm(),
      tableHeader: ['نوع بانک', 'کشور', 'شهر', 'نام بانک', 'کد شعبه', 'نام شعبه', 'تلفن', 'آدرس', 'فعال / غیرفعال'],
      tableBody: [
        {
          bankType: 'بانک رمز ارز',
          country: 'ایران',
          city: 'تهران',
          bankName: 'بانک ملت',
          branchCode: '001',
          branchName: 'مرکزی',
          phone: '021-12345678',
          address: 'خیابان انقلاب، پلاک ۱۲۳',
          isActive: 'فعال',
        },
        {
          bankType: 'بانک شهری',
          country: 'ایران',
          city: 'بوشهر',
          bankName: 'بانک صادرات',
          branchCode: '002',
          branchName: 'شعبه ساحلی',
          phone: '077-98765432',
          address: 'خیابان ساحل، پلاک ۴۵۶',
          isActive: 'غیرفعال',
        },
      ],
      customStylePerColumnVal: {
        فعال: 'p-1 rounded-lg bg-primary text-background',
        غیرفعال: 'p-1 rounded-lg bg-muted text-background',
      },
      actions: [
        {
          callback: (row) => {},
          label: 'ویرایش',
          styleProps: {
            tone: 'warning',
          },
        },
      ],
    };
  }
  navigateToAddBank() {
    this.router.navigate(['/geographical/bank/add']);
  }
  navigateToDash() {
    this.router.navigate(['/dashboard']);
  }
  generateTableForm() {
    const controls = {
      search: new CustomFormControl('', {
        label: 'جستوجو',
        type: 'search',

        validators: [],
      }),
      bankType: new CustomFormControl('', {
        type: 'select',
        label: 'نوع بانک',
        options: ['بانک رمز ارز', 'بانک شهری'],

        validators: [],
      }),
      isActive: new CustomFormControl('', {
        type: 'select',
        label: 'وضعیت',
        options: ['فعال', 'غیرفعال'],

        validators: [],
      }),
    };
    return new CustomFormGroup(controls);
  }
}
