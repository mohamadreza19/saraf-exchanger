import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeMutateComponent } from './pages/employee-mutate/employee-mutate.component';
import { EmployeeHomeComponent } from './pages/employee-home/employee-home.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: 'add', pathMatch: 'full', component: EmployeeMutateComponent },
      { path: '', pathMatch: 'full', component: EmployeeHomeComponent },
      // Add your employee routes here
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
