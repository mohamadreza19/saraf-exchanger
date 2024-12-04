import { CustomFormControl, CustomFormGroup } from '../form-builder/form-builder.component';

export interface TableConfig {
  title?: string;
  inputs: CustomFormGroup;
  tableHeader: string[];
  tableBody: object[];
  customStyleForVal?: { [key: string]: string };
  assetIndexFromBody?: number;
}
