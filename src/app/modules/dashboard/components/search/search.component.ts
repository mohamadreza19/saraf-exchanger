import { Component, EventEmitter, Output } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-dashboard-search',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() public onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}
