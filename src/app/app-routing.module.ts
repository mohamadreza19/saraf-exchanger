import { NgModule, TransferState } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { I18NEXT_SERVICE, I18NextModule, I18NextPipe } from 'angular-i18next';

import { TranslationService } from './shared/services/translation.service';
import { AngularSvgIconModule, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';
import { HttpClient } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/layout/layout.module').then((m) => m.LayoutModule),
    // redirectTo: '',
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'errors',
    loadChildren: () => import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  { path: '**', redirectTo: 'errors/404' },
];
export function svgLoaderFactory(http: HttpClient, transferState: TransferState): SvgHttpLoader {
  return new SvgHttpLoader(http);
}
@NgModule({
  imports: [RouterModule.forRoot(routes), I18NextModule.forRoot({}), BsDropdownModule.forRoot()],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
