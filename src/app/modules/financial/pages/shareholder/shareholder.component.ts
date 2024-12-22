import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from 'src/app/shared/form-builder/form-builder.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';

@Component({
  selector: 'app-shareholder',
  standalone: true,
  imports: [HeaderButtonsComponent, FormBuilderComponent, TableComponent],
  templateUrl: './shareholder.component.html',
  styleUrl: './shareholder.component.css',
})
export class ShareholderComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router) {
    this.tableConfig = {
      form: this.generateForm(),
      title: 'لیست سهام‌داران',
      tableHeader: ['نام', 'نام خانوادگی', 'شماره همراه', 'کد ملی', 'تعداد سهام', 'مبلغ'],
      tableBody: [
        {
          firstName: 'علی',
          lastName: 'محمدی',
          mobileNumber: '09121234567',
          nationalCode: '1234567890',
          shareCount: 50,
          amount: '1,500,000',
        },
        {
          firstName: 'مریم',
          lastName: 'احمدی',
          mobileNumber: '09131234567',
          nationalCode: '0987654321',
          shareCount: 100,
          amount: '3,000,000',
        },
      ],
      customStylePerColumnVal: {},
      actions: [
        {
          callback: () => {},
          label: 'ویرایش',
          styleProps: {
            tone: 'warning',
          },
        },
      ],
    };
  }

  generateForm() {
    const controls = {
      search: new CustomFormControl('', {
        label: 'جستجو',
        type: 'search',

        validators: [],
      }),
    };

    return new CustomFormGroup(controls);
    //...
  }
  navAdd() {
    this.router.navigate(['/financial/shareholder/add']);
  }
  navDash() {
    this.router.navigate(['/dashboard']);
  }
}
