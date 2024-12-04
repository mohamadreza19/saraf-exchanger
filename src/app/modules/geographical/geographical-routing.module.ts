import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankComponent } from './pages/bank/bank.component';
import { BankMutateComponent } from './pages/bank/bank-mutate/bank-mutate.component';
import { GeographicalComponent } from './geographical.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GeographicalComponent,
  },
  { path: 'bank', component: BankComponent },
  { path: 'bank/add', component: BankMutateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeographicalRoutingModule {}
