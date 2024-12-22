import { NgFor } from '@angular/common';
import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl2, FormBuilder2Component } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { InputComponent } from '../../../../shared/components/input/input.component';
import { BankCheckbook } from '../../models/bank-checkbook.interface';

@Component({
  selector: 'app-bank-checkbook-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, InputComponent, FormBuilder2Component],
  templateUrl: './bank-checkbook-add.component.html',
})
export class BankCheckbookAddComponent implements OnInit {
  // form: CustomFormGroup[]=[];
  forms: CustomFormGroup[] = [];

  controls: {
    [key: string]: FormControl2;
  } = {};

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { banks: string[]; currencyUnits: string[]; onSubmit: (form: CustomFormGroup) => void },
  ) {
    this.initializeControls();
    this.forms = [new CustomFormGroup(this.controls, 'افزودن چک', 'افزودن', this.data.onSubmit)];
    // this.forms[0]
  }

  ngOnInit(): void {}

  initializeControls() {
    this.controls['bankCheckbookNumber'] = new FormControl2('', {
      label: 'شماره چک',
      type: 'text',
      validators: [],
    });
    this.controls['bankName'] = new FormControl2('', {
      label: 'نام بانک',
      type: 'select',
      options: this.data.banks,
      validators: [],
    });
    this.controls['checkAmount'] = new FormControl2('', {
      label: 'مبلغ چک',
      type: 'text',
      validators: [],
    });
    this.controls['currencyUnit'] = new FormControl2('', {
      label: 'واحد پول',
      type: 'select',
      options: this.data.currencyUnits,
      validators: [],
    });
    this.controls['description'] = new FormControl2('', {
      label: 'توضیحات',
      type: 'text',
      validators: [],
    });
  }
}
