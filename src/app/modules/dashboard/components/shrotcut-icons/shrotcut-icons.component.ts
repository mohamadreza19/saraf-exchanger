import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ElementRef, Inject } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SubMenuItem, SubMenuItemShortcut } from 'src/app/core/models/menu.model';
import { MenuService } from 'src/app/modules/layout/services/menu.service';
import { TippyDirective } from '@ngneat/helipopper';
import { ModalService } from 'src/app/core/services/modal.service';
import { AddModalComponent } from './add-modal/add-modal.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: '[shortcut-icons]',
  standalone: true,
  imports: [AngularSvgIconModule, NgFor, NgIf, TippyDirective, NgTemplateOutlet, RouterLink],
  templateUrl: './shrotcut-icons.component.html',
  styleUrl: './shrotcut-icons.component.css',
})
export class ShrotcutIconsComponent {
  localStorageKey = 'selectedShortcuts';
  shortcuts: SubMenuItemShortcut[] = [];
  selectedShortcuts: SubMenuItemShortcut[] = [];

  constructor(el: ElementRef<HTMLDivElement>, private menuService: MenuService, private modal: ModalService) {
    this.shortcuts = menuService.allInPageInLinearArray;
    this.selectedShortcuts = this.getSelectedShortcuts();
    el.nativeElement.className = 'col-span-2 flex flex-row-reverse flex-wrap gap-2 h-fit text-muted-foreground';
  }

  openModal() {
    const ref = this.modal.open(AddModalComponent, {
      width: '600px',
      maxWidth: '600px',
      data: {
        shortcuts: this.shortcuts,
        selectedShortcuts: this.selectedShortcuts,
        handleSelect: (shortcut: SubMenuItemShortcut, index: number) => {
          this.handleSelect(shortcut, index);
          this.modal.close(ref);
        },
      },
    });
  }
  handleSelect(shortcut: SubMenuItemShortcut, index: number) {
    const selectedShortcuts = this.getSelectedShortcuts();

    const findDuplicate = selectedShortcuts.find((item) => item.label == shortcut.label);

    if (!findDuplicate) {
      this.setSelectedShortcuts([...selectedShortcuts, shortcut]);
    }
  }
  handleRemoveShortcut(e: Event, index: number) {
    e.stopPropagation();
    const arr = this.getSelectedShortcuts();

    const filter = arr.filter((_, itemIndex) => itemIndex != index);
    this.setSelectedShortcuts(filter);
  }

  getSelectedShortcuts(): SubMenuItemShortcut[] {
    const result = localStorage.getItem(this.localStorageKey);

    if (result) {
      const parsed = JSON.parse(result);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }

    return [];
  }
  setSelectedShortcuts(selectedShortcuts: SubMenuItemShortcut[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(selectedShortcuts));
    this.selectedShortcuts = selectedShortcuts;
  }
}
