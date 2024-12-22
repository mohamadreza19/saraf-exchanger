import { Component, Inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT, NgClass } from '@angular/common';
import { ResponsiveHelperComponent } from './shared/components/responsive-helper/responsive-helper.component';
import { NgxSonnerToaster } from 'ngx-sonner';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgClass, RouterOutlet, ResponsiveHelperComponent, NgxSonnerToaster, MatDialogModule, HttpClientModule],
})
export class AppComponent {
  title = 'Angular Tailwind';

  constructor(public themeService: ThemeService, @Inject(DOCUMENT) private document: Document) {
    document.body.dir = 'rtl';
    // document.body.dir = 'ltr';
    // setInterval(() => {
    //   if (document.body.dir == 'rtl') {
    //     document.body.dir = 'ltr';
    //   } else document.body.dir = 'rtl';
    // }, 3000);
  }
}
