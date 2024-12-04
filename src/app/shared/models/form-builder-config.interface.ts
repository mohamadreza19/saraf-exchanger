import { CustomFormControl } from '../form-builder/form-builder.component';

type InputKey = string;
type ReferencedOptionVal = string;
export type FileType = 'png' | 'jpg' | 'jpeg' | 'pdf';
export interface Input {
  type:
    | 'text'
    | 'search'
    | 'password'
    | 'email'
    | 'date'
    | 'file'
    | 'files'
    | 'select'
    | 'multi-select'
    | 'radio'
    | 'checkbox';
  filesLength?: number;
  label: string;
  placeholder?: string;
  options?: string[]; // For select, radio, and checkbox inputs
  selectedOptionIndex?: number;
  validators: [];
  showIf: string[]; //[InputKey, ReferencedOptionVal];
  allowedFileTypes?: FileType[];
}

export interface FormConfig {
  inputs: {
    [key: string]: CustomFormControl; // Each key (e.g., 'name', 'username') maps to an `Input`
  };
  allNames: string[]; // This is a separate property for the list of input names
  rootLabel: string;
  submitText: string;
}
export type FormBuilderConfig = FormConfig[];
