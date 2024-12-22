import { Component } from '@angular/core';
import { FormControl2, FormBuilder2Component } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { PROJECTS } from '../../constants/constants';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';
import { Router } from '@angular/router';
import { HeaderButtonsComponent } from '../../../financial/components/header-buttons/header-buttons.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TableComponent, HeaderButtonsComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  tableConfig: TableConfig;

  constructor(private router: Router) {
    const controls = {
      search: new FormControl2('', {
        label: 'جستوجو',
        type: 'text',
        validators: [],
      }),
    };
    const form = new CustomFormGroup(controls);
    this.tableConfig = {
      title: 'لیست خرید و فروش ثبت شده',
      form: form,
      tableHeader: [
        'نوع معامله',
        'نام کامل مشتری',
        'واحد مبلغ مورد نیاز',
        'مقدار',
        'واحد مبلغ واریزی',
        'مقدار',
        'نرخ تبدیل',
      ],
      tableBody: PROJECTS,
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
          callback(row) {
            router.navigate(['financial/pay/add']);
          },
          label: 'دریافت/پرداخت',
          styleProps: {
            tone: 'light',
          },
        },
        {
          callback(row) {
            router.navigate(['financial/transfer/add']);
          },
          label: 'انتقال',
          styleProps: {
            tone: 'light',
          },
        },
      ],
    };
  }

  navDash() {
    this.router.navigate(['/dashboard']);
  }
  navAdd() {
    this.router.navigate(['/project/add']);
  }
}
