import { Component, Input } from '@angular/core';
import { SearchIcon } from '../../icons/search/search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, SearchIcon],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
  @Input() value?: string;
  @Input() name?: string;
  @Input() id?: string;
  @Input() showSearchIcon?: boolean;
}
