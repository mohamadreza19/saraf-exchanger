import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from 'src/app/shared/form-builder/form-builder.component';
import { HeaderButtonsComponent } from '../../../financial/components/header-buttons/header-buttons.component';
import { TableComponent } from 'src/app/shared/components/tables/table/table.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { Router } from '@angular/router';

const fakeProfileImgUrl = 'assets/images/gray-avatar-placeholder.jpg';
@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [FormBuilderComponent, HeaderButtonsComponent, TableComponent],
  templateUrl: './customer.component.html',
})
export class CustomerComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router) {
    this.tableConfig = {
      title: 'مشتریان',
      form: this.generateTableForm(),
      actions: [],
      tableHeader: ['تصویر', 'نام', 'کد ملی'],
      tableBody: [
        {
          img: fakeProfileImgUrl,
          name: 'محمد رضا زرآینه',
          nationalCode: '۱۲۴۲۵۲۸۰۰۴',
        },
        {
          img: fakeProfileImgUrl,
          name: 'محمد رضا زرآینه',
          nationalCode: '۱۲۴۲۵۲۸۰۰۴',
        },
      ],
      assetIndexFromBody: 0,
    };
  }
  generateTableForm() {
    const controls = {
      search: new CustomFormControl('', {
        label: 'جستوجو',
        type: 'search',

        validators: [],
      }),
    };
    return new CustomFormGroup(controls);
  }
  clickP() {
    this.router.navigate(['/resource/customer/add']);
  }
  clickL() {
    this.router.navigate(['/dashboard']);
  }
}
