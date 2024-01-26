import { Component, Input } from '@angular/core';
import { LogoutComponent } from '../icons/logout/logout.component';
import { InputComponent } from '../forms/input/input.component';
import { ButtonComponent } from '../forms/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutComponent, InputComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() value: string = '';
  @Input() showSearchIcon = true;
}
