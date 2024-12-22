import { Component } from '@angular/core';
import { PayMutateService } from './pay-mutate.service';
import { FormBuilder2Component } from '../../../../../shared/components/form-builder2/form-builder2.component';

@Component({
  selector: 'app-pay-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './pay-mutate.component.html',
})
export class PayMutateComponent {
  constructor(public payMutateService: PayMutateService) {}
}
