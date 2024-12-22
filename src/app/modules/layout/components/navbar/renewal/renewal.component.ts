import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { RenewalModalComponent } from '../renewal-modal/renewal-modal.component';

@Component({
  selector: 'app-renewal',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, ButtonComponent],
  templateUrl: './renewal.component.html',
})
export class RenewalComponent {
  imgUrl = 'https://cdn-icons-png.flaticon.com/512/1490/1490853.png';

  showSelectBox: boolean = false;
  constructor(private modal: ModalService) {
    // this.openModal();
  }

  openModal() {
    this.modal.open(RenewalModalComponent, {
      width: '600px',
      maxWidth: '600px',
    });
  }

  close() {
    this.showSelectBox = false;
  }
  handleSelect(baseCurrency: any) {}
}
