import { Component } from '@angular/core';
import { ExchangeTableComponent } from 'src/app/modules/dashboard/components/view/exchange-table/exchange-table.component';
import { exchangeOffice } from 'src/app/modules/dashboard/models/exchange-office';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { Router } from '@angular/router';
import { TableComponent } from '../../../../shared/components/tables/table/table.component';
import { TableConfig } from 'src/app/shared/models/table-config';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'app-exchange-office',
  standalone: true,
  imports: [ExchangeTableComponent, ButtonComponent, HeaderButtonsComponent, TableComponent],
  templateUrl: './exchange-office.component.html',
})
export class ExchangeOfficeComponent {
  dummyData: object[] = [];
  tableConfig!: TableConfig;
  searchControl!: CustomFormControl;

  constructor(private router: Router) {
    this.dummyData = [
      {
        name: 'نوبیتکس',
        phoneNumber: '09012446913',
        country: 'ایران',
        userType: 'حقوقی',
        iconUrl: 'assets/avatars/exchange-office1.jpg',
        status: 'غیر فعال',
        expireDate: '1403/12/12',
        panelType: 'نقره',
        id: '123456789',
      },
      {
        name: 'ای او',
        phoneNumber: '09012446913',
        country: 'ایران',
        userType: 'حقوقی',
        iconUrl: 'assets/avatars/exchange-office2.jpg',
        status: 'فعال',
        expireDate: '1403/12/12',
        panelType: 'طلا',
        id: '123456789',
      },
    ];

    const controls = {
      search: new CustomFormControl('', {
        label: 'جستوجو',
        showIf: [],
        type: 'search',
        validators: [],
      }),
      userType: new CustomFormControl('', {
        type: 'radio',
        label: '',
        options: ['حقوقی', 'حقیقی'],
        showIf: [],
        validators: [],
      }),
      panel: new CustomFormControl('', {
        label: 'پنل',
        type: 'select',
        options: ['نقره', 'صرافی', 'طلا'],
        showIf: [],
        validators: [],
      }),
    };
    const form = new CustomFormGroup(controls);

    this.tableConfig = {
      title: 'صرافی ها',
      tableHeader: ['نام', 'شماره همراه', 'کشور', 'حقیقی/حقوقی', 'عکس پروفایل', 'وضعیت', 'تاریخ تمدید', 'پنل', 'ID'],
      inputs: form,
      tableBody: this.dummyData,
      assetIndexFromBody: 4,
      customStyleForVal: {},
    };
  }

  navigateToAddExchange() {
    this.router.navigate(['/financial/exchange-office/add']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
