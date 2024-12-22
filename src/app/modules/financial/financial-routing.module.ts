import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './financial.component';

import { CurrencyComponent } from './pages/currency/currency.component';
import { CurrencyMutateComponent } from './pages/currency/currency-mutate/currency-mutate.component';
import { CashTreasuryComponent } from './pages/cash-treasury/cash-treasury.component';
import { CashTreasuryMutateComponent } from './pages/cash-treasury/cash-treasury-mutate/cash-treasury-mutate.component';
import { BankAccountComponent } from './pages/bank-account/bank-account.component';
import { BankAccountMutateComponent } from './pages/bank-account/bank-account-mutate/bank-account-mutate.component';
import { BankCheckbookComponent } from './pages/bank-checkbook/bank-checkbook.component';
import { BankCheckbookMutateComponent } from './pages/bank-checkbook/bank-checkbook-mutate/bank-checkbook-mutate.component';
import { ShareholderComponent } from './pages/shareholder/shareholder.component';
import { ShareholderMutateComponent } from './pages/shareholder/shareholder-mutate/shareholder-mutate.component';
import { TransferComponent } from './pages/transfer/transfer.component';
import { TransferMutateComponent } from './pages/transfer/transfer-mutate/transfer-mutate.component';

import { ReceiveMutateComponent } from './pages/receive/receive-mutate/receive-mutate.component';
import { ReceiveComponent } from './pages/receive/receive.component';
import { PayMutateComponent } from './pages/pay/pay-mutate/pay-mutate.component';
import { PayComponent } from './pages/pay/pay.component';
import { PanelRenewalComponent } from './pages/panel-renewal/panel-renewal.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },
      { path: 'bank-account', component: BankAccountComponent },
      { path: 'bank-account/add', component: BankAccountMutateComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'currency/add', component: CurrencyMutateComponent },
      { path: 'cash-treasury', component: CashTreasuryComponent },
      { path: 'cash-treasury/add', component: CashTreasuryMutateComponent },
      { path: 'bank-checkbook', component: BankCheckbookComponent },
      { path: 'bank-checkbook/add', component: BankCheckbookMutateComponent },
      { path: 'shareholder', component: ShareholderComponent },
      { path: 'shareholder/add', component: ShareholderMutateComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'transfer/add', component: TransferMutateComponent },
      { path: 'panel-renewal', component: PanelRenewalComponent },
      {
        path: 'receive',
        component: ReceiveComponent,
      },

      {
        path: 'receive/add',
        component: ReceiveMutateComponent,
      },
      {
        path: 'pay',
        component: PayComponent,
      },
      {
        path: 'pay/add',
        component: PayMutateComponent,
      },
      { path: '**', redirectTo: 'errors/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialRoutingModule {}
