import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { ButtonComponent } from '../button/button.component';
import { CustomFormControl } from '../../form-builder/form-builder.component';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FilesInputComponent } from './files-input/files-input.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgPersianDatepickerModule,
    NgIf,
    NgFor,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgTemplateOutlet,
    AngularSvgIconModule,
    NgClass,
    ButtonComponent,
    NgClickOutsideDirective,
    NgxFileDropModule,
    FilesInputComponent,
  ],
  templateUrl: './input.component.html',
})
export class InputComponent {
  _iconUrl = '/assets/icons/material-icons/solid/download.svg';
  _iconUrlImage = '/assets/icons/material-icons/solid/image.svg';
  show: boolean = true;

  @Input() control!: CustomFormControl; // Pass the actual FormControl
  @Input() className?: string; // Allow dynamic styling

  isCustomBoxOpen = false;

  constructor(private formGroupDirective: FormGroupDirective, el: ElementRef<HTMLElement>) {
    el.nativeElement.className = 'flex items-center ';
  }
  ngOnInit(): void {
    console.log();
    // Set the default value (select the first option by default)
    if (this.control.type && this.control.options && typeof this.control.selectedOptionIndex === 'number') {
      switch (this.control.type) {
        case 'select':
          this.control.setValue(this.control.options[this.control.selectedOptionIndex]);
          break;

        default:
          break;
      }
      // this.control.setValue(this.control.options[0]);
    }
    // console.log(this.formGroupDirective);
    const showIf = this.control.showIf; // [controlKey, value]
    if (showIf && showIf.length) {
      this.show = false;
      const controlKey = showIf[0];
      const valueIfBe = showIf[1];

      const control = this.formGroupDirective.form.get(controlKey);

      if (control && control.value) {
        if (control.value === valueIfBe) {
          this.show = true;
        }
        control.valueChanges.subscribe((controlValue) => {
          if (controlValue === valueIfBe) {
            this.show = true;
          } else {
            this.show = false;
          }
        });
      }
    }
    // console.log(this.control);
  }

  openCustomBox() {
    this.isCustomBoxOpen = true;
  }
  closeCustomBox() {
    this.isCustomBoxOpen = false;
  }
  _handleSetMultiSelectItem(val: string) {
    const formControlArrValue = this.control.value;

    if (Array.isArray(formControlArrValue)) {
      this.control.setValue([...formControlArrValue, val]);
    } else {
      this.control.setValue([val]);
    }
    console.log(this.control);
  }
  _handleRemoveMultiSelectItem(val: string) {
    const formControlArrValue = this.control.value;

    if (Array.isArray(formControlArrValue)) {
      const filteredArray = formControlArrValue.filter((item) => item !== val);

      this.control.setValue(filteredArray);
    }
    // console.log(this.control);
  }
  _getMultiSelectSelectedItemAsArray(val: any): string[] {
    return val as string[];
  }
}
