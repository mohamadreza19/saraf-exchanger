import { Component, OnInit } from '@angular/core';
import { CardControl_ } from 'src/app/shared/components/cards/card/models/cardControl';
import { Customer } from 'src/app/shared/components/cards/card/models/customer.interface';
import { FormBuilder2Component } from 'src/app/shared/components/form-builder2/form-builder2.component';
import { CustomFormGroup } from 'src/app/shared/form-builder/form-builder.component';

import { ReceiveMutateService } from './receive-mutate.service';

@Component({
  selector: 'app-receive-pay-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './receive-mutate.component.html',
})
export class ReceiveMutateComponent implements OnInit {
  forms: CustomFormGroup[] = [];

  timeoutId: any;

  constructor(public receiveMutateService: ReceiveMutateService) {}

  ngOnInit(): void {}
}
