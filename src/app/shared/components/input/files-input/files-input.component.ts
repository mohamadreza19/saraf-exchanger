import { NgClass, NgFor, NgIf } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CustomFormControl } from 'src/app/shared/form-builder/form-builder.component';

@Component({
  selector: 'app-files-input',
  standalone: true,
  imports: [AngularSvgIconModule, NgClass, NgIf, NgFor, PdfViewerModule],
  templateUrl: './files-input.component.html',
})
export class FilesInputComponent implements AfterViewInit {
  _iconUrl = '/assets/icons/material-icons/solid/download.svg';
  _iconUrlImage = '/assets/icons/material-icons/solid/image.svg';

  fileUrlToShow!: {
    src: string;
    index: number;
    type: 'image' | 'pdf';
  };

  @Input()
  control!: CustomFormControl;
  @ViewChild('file')
  fileEl!: ElementRef<HTMLInputElement>;
  timeoutId: any;

  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.control.setValue([]);
  }
  onFilesChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = (input.files as FileList)[0];
    const filesLength = this.control.filesLength || 1;
    const controlVal = this.control.value as File[];

    // this.control.setValue(file); // Update the FormControl value
    this.fileLimitCheck();
    this._checkFileType(file);
    this.control.setValue(controlVal.concat(file));

    this.fileUrlToShow = {
      src: this._readFileAsObjectURL(file as File),
      index: this.control.value.length - 1,
      type: 'image',
    };
  }
  onDeleteFile(fileIndex: number): void {
    const newFiles = this.control.value.filter((_: any, index: number) => index !== fileIndex);

    this.control.setValue(newFiles);

    if (newFiles.length) {
      this.fileUrlToShow = {
        src: this._readFileAsObjectURL(newFiles[newFiles.length - 1]),
        index: 0,
        type: 'image',
      };
    } else this.fileUrlToShow = null as any;
  }
  public _drop(e: DragEvent) {
    e.preventDefault();

    const file = (e.dataTransfer?.files as FileList)[0];
    const filesLength = this.control.filesLength || 1;
    const controlVal = this.control.value as File[];

    this.fileLimitCheck();

    this._checkFileType(file);
    this.control.setValue(controlVal.concat(file));

    this.fileUrlToShow = {
      src: this._readFileAsObjectURL(file as File),
      index: this.control.value.length - 1,
      type: 'image',
    };
  }
  _checkFileType(file: File): void {
    const allowedFileTypes = this.control.allowedFileTypes;
    let isInclude = false;
    if (allowedFileTypes) {
      for (let allowedFileType of allowedFileTypes) {
        if (file.type.includes(allowedFileType)) {
          isInclude = true;
          break;
        }
      }
      if (!isInclude) {
        const error = `تنها فایل های ${this.control.allowedFileTypes?.join(' ')} مجاز است`;
        this.control.setErrors([error]);
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
          this.control.setErrors(null);
        }, 1700);
        throw 'error';
      }
    }
  }
  fileLimitCheck() {
    if (this.control.filesLength) {
      if (this.control.value.length >= this.control.filesLength) {
        const error = `تعداد فایل :${this.control.filesLength}`;

        this.control.setErrors([error]);

        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => {
          this.control.setErrors(null);
        }, 1000);
        throw error;
      }
    }
  }
  public _fileOver(event: DragEvent) {
    event.preventDefault();
  }
  _getValueAsFiles(file: any): File[] {
    return file;
  }
  public _dragover(event: any) {
    event.preventDefault();
  }
  private _readFileAsObjectURL(file: File) {
    return URL.createObjectURL(file);
  }
  openSelectFile() {
    this.fileEl.nativeElement.click();
  }
}
