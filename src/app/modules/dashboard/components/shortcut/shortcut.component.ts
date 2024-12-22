import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItemShortcut } from 'src/app/core/models/menu.model';

@Component({
  selector: 'app-shortcut',
  standalone: true,
  imports: [AngularSvgIconModule, NgIf],
  templateUrl: './shortcut.component.html',
  styleUrl: './shortcut.component.css',
})
export class ShortcutComponent {
  @Input()
  subMenu!: SubMenuItemShortcut;
}
