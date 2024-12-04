import { Component, ElementRef } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-navbar-notification',
  standalone: true,
  imports: [AngularSvgIconModule],

  templateUrl: './navbar-notification.component.html',
})
export class NavbarNotificationComponent {
  iconUrl = 'assets/icons/material-icons/solid/notification.svg';
  constructor(el: ElementRef<HTMLElement>) {
    // el.nativeElement.classList.add('h-full');
  }
}
