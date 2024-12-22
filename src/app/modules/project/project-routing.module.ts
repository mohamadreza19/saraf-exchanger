import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectMutateComponent } from './pages/project/project-mutate/project-mutate.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
  },
  {
    path: 'add',
    component: ProjectMutateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
