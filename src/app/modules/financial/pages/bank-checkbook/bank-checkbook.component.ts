import { Component } from '@angular/core';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-checkbook',
  standalone: true,
  imports: [TableComponent, HeaderButtonsComponent],
  templateUrl: './bank-checkbook.component.html',
  styleUrl: './bank-checkbook.component.css',
})
export class BankCheckbookComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router) {
    this.tableConfig = {
      title: 'دسته چک‌ها',
      form: this.generateForm(),
      tableHeader: ['تعداد برگ', 'اولین سریال', 'فعال / غیرفعال'],
      tableBody: [
        {
          leafCount: 50,
          firstSerial: '123456',
          isActive: 'فعال',
        },
        {
          leafCount: 100,
          firstSerial: '654321',
          isActive: 'غیرفعال',
        },
      ],
      customStylePerColumnVal: {
        فعال: 'p-1 rounded-lg bg-primary text-background',
        غیرفعال: 'p-1 rounded-lg bg-muted text-background',
      },
      actions: [
        {
          label: 'ویرایش',
          callback: (row) => {},
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
      isActive: new CustomFormControl('', {
        label: 'غیرفعال',
        type: 'checkbox',
        options: [],

        validators: [],
      }),
      //...
    };

    return new CustomFormGroup(controls);
    //...
  }
  navAdd() {
    this.router.navigate(['/financial/bank-checkbook/add']);
  }
  navDash() {
    this.router.navigate(['/dashboard']);
  }
}
