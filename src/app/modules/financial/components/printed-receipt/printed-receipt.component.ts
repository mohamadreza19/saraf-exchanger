import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-printed-receipt',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './printed-receipt.component.html',
  styleUrl: './printed-receipt.component.css',
})
export class PrintedReceiptComponent {
  imagePath = 'assets/images/fake-receipt.webp';
  imageName = 'fake-receipt.webp';

  downloadImage() {
    const a = document.createElement('a');
    a.href = this.imagePath; // Reference to the local image
    a.download = this.imageName; // Default name for the downloaded image
    a.click();
  }
}
