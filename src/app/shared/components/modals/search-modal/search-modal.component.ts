import { Component, Inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomFormControl, CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';
import { InputComponent } from '../../input/input.component';
import { NgFor } from '@angular/common';
import { ButtonComponent } from '../../button/button.component';
import { FormControl2 } from '../../form-builder2/form-builder2.component';

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent, NgFor, ButtonComponent],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css',
})
export class SearchModalComponent {
  searchControl!: CustomFormControl;
  searchTypeSelect!: CustomFormControl;
  form!: CustomFormGroup;
  constructor(
    public dialogRef: MatDialogRef<SearchModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string },
  ) {
    this.initForm();
    // console.log(this.form);
  }

  initForm() {
    this.searchControl = new FormControl2('', {
      type: 'search',
      label: 'جستجو',

      validators: [],
    });
    this.searchTypeSelect = new FormControl2('', {
      type: 'select',
      label: 'جستجو در ',
      options: ['1', '2', '3', '4'],

      validators: [],
    });
    const controls = {
      search: this.searchControl,
      searchTypeSelect: this.searchTypeSelect,
    };

    this.form = new CustomFormGroup(controls);
  }
  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
  _getObjectValAsCustomControlArray(form: object) {
    return Object.values(form) as FormControl2[];
  }
}
