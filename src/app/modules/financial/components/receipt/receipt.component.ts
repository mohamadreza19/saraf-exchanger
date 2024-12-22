import { Component, Input } from '@angular/core';
import { ReceiptControl_ } from '../../models/receipt-control';

@Component({
  selector: 'com-receipt',
  standalone: true,
  imports: [],
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css',
})
export class ReceiptComponent {
  @Input()
  control!: ReceiptControl_;
}
