import { Component } from '@angular/core';
import { FormBuilder2Component, FormControl2 } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'app-bank-checkbook-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './bank-checkbook-mutate.component.html',
  styleUrl: './bank-checkbook-mutate.component.css',
})
export class BankCheckbookMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    this.forms = [this.generateCheckbookForm()];
  }

  generateCheckbookForm() {
    const controls = {
      leafCount: new FormControl2('', {
        type: 'text',
        label: 'تعداد برگ',
        validators: [],
      }),
      firstSerial: new FormControl2('', {
        type: 'text',

        label: 'اولین سریال',
        validators: [],
      }),
      isActive: new FormControl2(false, {
        type: 'checkbox',
        label: 'فعال',
        options: [],
        validators: [],
      }),
    };

    return new CustomFormGroup(controls, 'افزودن دسته چک', 'ذخیره');
  }
}
