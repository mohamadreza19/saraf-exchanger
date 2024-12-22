import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
interface ServiceItem {
  label: string;
  price: string;
}
interface Service {
  title: string;
  items: ServiceItem[];
}
const data: Service[] = [
  {
    title: 'سرویس خرید و فروش ارز',
    items: [
      {
        label: 'ماهیانه',
        price: '20000000',
      },
      {
        label: '3 ماهه',
        price: '20000000',
      },
      {
        label: 'سالیانه',
        price: '20000000',
      },
    ],
  },
];
const paymentMethods = ['واریز به حساب', 'واریز با رمزارز', 'پرداخت از طریق بانک'];
@Component({
  selector: 'app-renewal-modal',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, ButtonComponent],
  templateUrl: './renewal-modal.component.html',
})
export class RenewalModalComponent {
  services = data;
  selectedServiceItem!: ServiceItem;
  selectedPaymentMethod!: string;
  paymentMethods = paymentMethods;
  constructor() {
    this.selectedServiceItem = data[0].items[0];

    // this.services = data;
  }
  handleSelectServiceItem(serviceItem: ServiceItem) {
    // this.serviceItem = serviceItem;
  }
}
