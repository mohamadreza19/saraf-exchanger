import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExchangeTableComponent } from 'src/app/modules/dashboard/components/view/exchange-table/exchange-table.component';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { CurrencyUnit } from 'src/app/shared/models/currency-unit.interface';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [ExchangeTableComponent, HeaderButtonsComponent],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss',
})
export class CurrencyComponent {
  table1Keys: string[];
  table1Label = 'لیست ارز ها';
  table1Body: CurrencyUnit[];
  table1ForbiddenKeysInItem: string[];
  table1IconsUrl!: string[];

  constructor(private router: Router) {
    this.table1Keys = ['اسم', 'اختصار', 'ارز پایه', ' ضریب نسبت به ارز مبنا'];
    this.table1Body = [
      {
        name: 'دلار ',
        logoUrl: 'https://cdn-icons-png.flaticon.com/512/1490/1490853.png',
        acronym: 'USD',
        baseCurrency: 'یورو',
        rateToBaseCurrency: '0.95',
      },
      {
        name: 'یورو',
        logoUrl: 'https://cdn-icons-png.flaticon.com/512/1490/1490850.png',
        acronym: 'EUR',
        baseCurrency: 'دلار',
        rateToBaseCurrency: '1.06',
      },
    ];
    this.table1ForbiddenKeysInItem = ['logoUrl'];
    this.table1IconsUrl = this.table1Body.map((item) => item.logoUrl);
  }
  navigateToAddCurrency() {
    this.router.navigate(['/financial/currency/add']);
  }
  backToDash() {
    this.router.navigate(['/dashboard']);
  }
}
