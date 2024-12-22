import { NgFor, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubMenuItemShortcut } from 'src/app/core/models/menu.model';
import { ShortcutComponent } from '../../shortcut/shortcut.component';

@Component({
  selector: 'app-add-modal',
  standalone: true,
  imports: [NgFor, NgIf, ShortcutComponent],
  templateUrl: './add-modal.component.html',
  styleUrl: './add-modal.component.css',
})
export class AddModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      shortcuts: SubMenuItemShortcut[];
      selectedShortcuts: SubMenuItemShortcut[];
      handleSelect: (shortcut: SubMenuItemShortcut, index: number) => void;
    },
  ) {}
}
