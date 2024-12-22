import { Component } from '@angular/core';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/services/modal.service';
import { TransferBetweenAccountsComponent } from '../../components/transfer-between-accounts/transfer-between-accounts.component';

@Component({
  selector: 'app-cash-treasury',
  standalone: true,
  imports: [HeaderButtonsComponent, TableComponent],
  templateUrl: './cash-treasury.component.html',
  styleUrl: './cash-treasury.component.css',
})
export class CashTreasuryComponent {
  tableConfig!: TableConfig;

  constructor(private router: Router, private modalService: ModalService) {
    const controls = {
      search: new CustomFormControl('', {
        type: 'text',
        label: 'جستجو',
        validators: [],
      }),
    };

    this.tableConfig = {
      title: 'صندوق / خزانه',
      form: new CustomFormGroup(controls),

      tableHeader: ['نام', 'نوع صندوق', 'توضیحات', 'فعال / غیرفعال', 'موجودی فعلی', 'کلید نام ارزهای موجود', 'نام ارز'],
      tableBody: [
        {
          name: 'صندوق 1',
          type: 'صندوق',
          description: 'صندوق برای حمل و نقل',
          isActive: 'فعال',
          amount: '1,000,000',
          existCurrencyKeys: 'USD/USDT',
          currencyName: 'دلار',
        },
        {
          name: 'صندوق 2',
          type: 'صندوق',
          description: 'صندوق برای حمل و نقل',
          isActive: 'غیرفعال',
          amount: '1,000,000',
          existCurrencyKeys: 'USD/USDT',
          currencyName: 'دلار',
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
        {
          callback: (row) => this.openTransferAccountForm(row),
          label: 'جابجایی به',
        },
      ],
    };
  }
  openTransferAccountForm(row: any) {
    this.modalService.open(TransferBetweenAccountsComponent, {
      width: '800px',
      maxWidth: '800px',
    });
  }

  navP() {
    this.router.navigate(['/financial/cash-treasury/add']);
  }
  navL() {
    this.router.navigate(['/dashboard']);
  }
}
