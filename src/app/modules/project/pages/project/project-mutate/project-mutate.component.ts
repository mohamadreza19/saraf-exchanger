import { Component } from '@angular/core';
import { ProjectMutateService } from './project-mutate.service';
import { FormBuilder2Component } from '../../../../../shared/components/form-builder2/form-builder2.component';

@Component({
  selector: 'app-project-mutate',
  standalone: true,
  imports: [FormBuilder2Component],
  templateUrl: './project-mutate.component.html',
  providers: [ProjectMutateService],
})
export class ProjectMutateComponent {
  constructor(public ProjectMutateService: ProjectMutateService) {}
}
