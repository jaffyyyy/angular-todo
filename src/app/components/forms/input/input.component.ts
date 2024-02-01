import { Component, Input } from '@angular/core';
import { SearchIcon } from '../../icons/search/search.component';
import { CommonModule } from '@angular/common';
import { CloseCircleIconComponent } from '../../icons/close-circle-icon/close-circle-icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, SearchIcon, CloseCircleIconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() value?: string;
  @Input() name?: string;
  @Input() id?: string;
  @Input() showSearchIcon?: boolean;
  @Input() showClearIcon?: boolean;
}
