import { Injector, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';

import { DialogModule } from '@angular/cdk/dialog';
import { NgClass } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterOutlet } from '@angular/router';
import { NgxSonnerToaster } from 'ngx-sonner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';

export let AppInjector: Injector;
// import {MatSnackBarModule MatSelectModule, MatCheckboxModule, MatInputModule, } from '@angular/material';
@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    NgClass,
    RouterOutlet,
    ResponsiveHelperComponent,
    NgxSonnerToaster,
    MatSnackBarModule,
    DialogModule,
    MatProgressBarModule,
  ],
  providers: [
    // provideClientHydration(),
    // { provide: HTTP_INTERCEPTORS, useClass: NormalizedListDataInterceptor, multi: true },
    provideClientHydration(),
    //
    provideAnimations(),

    // { provide: LOCALE_ID, useFactory: getLocale },
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
