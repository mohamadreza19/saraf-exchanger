import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { ContactCustomerComponent } from './pages/contact-customer/contact-customer.component';
import { ContactCustomerMutateComponent } from './pages/contact-customer/contact-customer-mutate/contact-customer-mutate.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    children: [
      {
        path: 'support',
        component: ContactCustomerComponent,
      },
      {
        path: 'support/add',
        component: ContactCustomerMutateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule {}
