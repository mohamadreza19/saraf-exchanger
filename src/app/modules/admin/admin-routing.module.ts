import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { PanelComponent } from './panel/panel.component';
import { PanelMutateComponent } from './panel/panel-mutate/panel-mutate.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'panel',
        component: PanelComponent,
      },
      {
        path: 'panel/add',
        component: PanelMutateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
