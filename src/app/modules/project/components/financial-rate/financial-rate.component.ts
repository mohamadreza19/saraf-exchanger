import { Component, Input } from '@angular/core';
import { FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ModalService } from 'src/app/core/services/modal.service';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { AddFinancialRateControls } from '../../types/add-financial-rate-controls';
import { sum } from 'src/app/shared/utils/sum.util';
import { NgFor, NgTemplateOutlet } from '@angular/common';
import { FinanCialRate } from './models/FinancialRate';

@Component({
  selector: 'app-financial-rate',
  standalone: true,
  imports: [ButtonComponent, NgFor, NgTemplateOutlet],
  templateUrl: './financial-rate.component.html',
})
export class FinancialRateComponent {
  @Input()
  control!: FormControl2;
  constructor(private modal: ModalService) {}

  async openModal() {
    const m = await import('../financial-rate-modal/financial-rate-modal.component');
    const modalRef = this.modal.open(m.FinancialRateModalComponent, {
      width: '400px',
      maxWidth: '400px',
      data: {
        onSubmit: (form: CustomFormGroup) => {
          this.handleSubmit(form);
          this.modal.close(modalRef);
        },
      },
    });
  }
  handleRemove() {
    this.control.setValue(null);
  }

  handleSubmit(form: CustomFormGroup) {
    const { financialRate, profit }: AddFinancialRateControls = form.controls as any;

    this.control.setValue(sum([financialRate.value, profit.value]));
  }
}
