import { CardControl_ } from '../components/cards/card/models/cardControl';
import { FormControl2 } from '../components/form-builder2/form-builder2.component';
import { CustomFormControl } from '../form-builder/form-builder.component';

type InputKey = string;
type ReferencedOptionVal = string;
export type FileType = 'png' | 'jpg' | 'jpeg' | 'pdf';

export type InputType =
  | 'text'
  | 'financial-rate'
  | 'phone-number'
  | 'amount'
  | 'search-select'
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

export interface Input {
  type: InputType;
  groupedBy?: string;
  filesLength?: number;
  selectOptionsLength?: number;
  label: string;
  placeholder?: string;
  options?: string[]; // For select, radio, and checkbox inputs
  selectedOptionIndex?: number;
  validators: [];
  disabled?: boolean;
  show?: boolean;
  allowedFileTypes?: FileType[];
  onChange?: (value: any) => void;
}

export interface FormConfig {
  inputs: {
    [key: string]: FormControl2 | CardControl_; // Each key (e.g., 'name', 'username') maps to an `Input`
  };
  allNames: string[]; // This is a separate property for the list of input names
  rootLabel: string;
  submitText: string;
}
export type FormBuilderConfig = FormConfig[];
