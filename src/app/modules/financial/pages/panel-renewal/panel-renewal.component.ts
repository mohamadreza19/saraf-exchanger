import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';

@Component({
  selector: 'app-panel-renewal',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './panel-renewal.component.html',
  styleUrl: './panel-renewal.component.css',
})
export class PanelRenewalComponent {
  tableConfig!: TableConfig;

  constructor() {
    this.tableConfig = {
      title: 'لیست صورت حساب',
      tableHeader: ['شماره صورت حساب', 'نوع سرویس', 'تاریخ', 'مبلغ'],
      tableBody: [
        {
          renewalNumber: '101010',
          serviceType: 'خرید فروش ارز',
          date: '1403/12/12',
          price: '20,000,000',
        },
      ],
      form: new CustomFormGroup({}),
    };
  }
}
