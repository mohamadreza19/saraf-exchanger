import { Component, Input } from '@angular/core';
import { HeaderButtonsComponent } from '../../../financial/components/header-buttons/header-buttons.component';
import { ExchangeTableComponent } from 'src/app/modules/dashboard/components/view/exchange-table/exchange-table.component';
import { exchangeOffice } from 'src/app/modules/dashboard/models/exchange-office';
import { Router } from '@angular/router';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { CustomFormControl } from 'src/app/shared/form-builder/form-builder.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { SearchInputComponent } from '../../../../shared/components/input/search-input/search-input.component';

@Component({
  selector: 'app-employee-home',
  standalone: true,
  imports: [HeaderButtonsComponent, ExchangeTableComponent, InputComponent, ButtonComponent, SearchInputComponent],
  templateUrl: './employee-home.component.html',
  styleUrl: './employee-home.component.scss',
})
export class EmployeeHomeComponent {
  table1Keys: string[];
  table1Label = 'لیست کارمند ها';
  table1Body: any[];
  table1ForbiddenKeysInItem: string[];
  table1IconsUrl!: string[];

  @Input()
  searchControl = new CustomFormControl(null, {
    label: 'جستوجو',
    showIf: [],
    type: 'search',
    validators: [],
  });

  constructor(private router: Router) {
    this.table1Keys = ['اسم', 'شماره تماس', 'وضعیت', 'تاریخ انقضاء', 'ID'];
    this.table1Body = [
      {
        name: 'نوبیتکس',
        phoneNumber: '09032446913',
        iconUrl: 'assets/avatars/exchange-office1.jpg',
        status: 'فعال',
        expireDate: '1403/12/12',
        id: '123456789',
      },
      {
        name: 'ای او',
        phoneNumber: '09032446913',
        iconUrl: 'assets/avatars/exchange-office2.jpg',
        status: 'فعال',
        expireDate: '1403/12/12',
        id: '123456789',
      },
    ];
    this.table1ForbiddenKeysInItem = ['iconUrl'];
    this.table1IconsUrl = this.table1Body.map((item) => item.iconUrl);
  }
  navigate() {
    this.router.navigate(['/financial/exchange-office/add']);
  }
  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
