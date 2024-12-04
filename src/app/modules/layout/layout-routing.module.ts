import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'employee',
    component: LayoutComponent,
    loadChildren: () => import('../employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'financial',
    component: LayoutComponent,
    loadChildren: () => import('../financial/financial.module').then((m) => m.FinancialModule),
  },
  {
    path: 'geographical',
    component: LayoutComponent,
    loadChildren: () => import('../geographical/geographical.module').then((m) => m.GeographicalModule),
  },
  {
    path: 'admin',
    component: LayoutComponent,
    loadChildren: () => import('../admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'contact',
    component: LayoutComponent,
    loadChildren: () => import('../contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'components',
    component: LayoutComponent,
    loadChildren: () => import('../uikit/uikit.module').then((m) => m.UikitModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
