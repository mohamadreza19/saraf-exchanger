import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl2, FormBuilder2Component } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'app-financial-rate-modal',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './financial-rate-modal.component.html',
  styleUrl: './financial-rate-modal.component.css',
})
export class FinancialRateModalComponent {
  form1!: CustomFormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { onSubmit: (form: CustomFormGroup) => void },
  ) {
    const controls = {
      financialRate: new FormControl2('', {
        label: 'نرخ',
        type: 'text',
        validators: [],
      }),
      profit: new FormControl2('', {
        label: 'سود',
        type: 'text',
        validators: [],
      }),
    };

    this.form1 = new CustomFormGroup(controls, 'افزودن نرخ', 'ثبت', (form) => {
      data.onSubmit(form);
    });
  }
}
