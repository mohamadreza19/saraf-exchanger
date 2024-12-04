import { Component } from '@angular/core';
import {
  CustomFormControl,
  CustomFormGroup,
  FormBuilderComponent,
} from '../../../../shared/form-builder/form-builder.component';
import { FormConfig } from 'src/app/shared/models/form-builder-config.interface';

@Component({
  selector: 'app-panel-mutate',
  standalone: true,
  imports: [FormBuilderComponent],
  templateUrl: './panel-mutate.component.html',
  styleUrl: './panel-mutate.component.scss',
})
export class PanelMutateComponent {
  forms: CustomFormGroup[] = [];

  constructor() {
    const controls = {
      module: new CustomFormControl('', {
        type: 'select',
        label: 'انتخاب ماژول',
        options: ['نقره', 'صرافی', 'طلا'],
        showIf: [],
        validators: [],
      }),
      currencyUnits: new CustomFormControl('', {
        type: 'select',
        label: 'واحد های پولی',
        options: ['تومان', 'ارز'],
        showIf: [],
        validators: [],
      }),
      price: new CustomFormControl('', {
        type: 'text',
        label: 'قیمت',
        showIf: [],
        validators: [],
      }),
      period: new CustomFormControl('', {
        type: 'select',
        label: 'مدت',
        options: ['یک ماهه', 'سه ماهه', 'شش ماهه', 'یک ساله'],
        showIf: [],
        validators: [],
      }),
      isActive: new CustomFormControl('', {
        type: 'checkbox',
        label: 'فعال',
        options: ['فعال'],
        showIf: [],
        validators: [],
      }),
    };
    const form1 = new CustomFormGroup(controls, 'ثبت پنل', 'ثبت');

    this.forms.push(form1);
  }
}
