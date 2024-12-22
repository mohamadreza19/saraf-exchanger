import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { NavbarDateStatusComponent } from './navbar-date-status/navbar-date-status.component';
import { NavbarNotificationComponent } from './navbar-notification/navbar-notification.component';
import { RenewalComponent } from './renewal/renewal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    AngularSvgIconModule,
    NavbarMenuComponent,
    ProfileMenuComponent,
    NavbarMobileComponent,
    NavbarDateStatusComponent,
    NavbarNotificationComponent,

    RenewalComponent,
  ],
})
export class NavbarComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  ngOnInit(): void {}

  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
