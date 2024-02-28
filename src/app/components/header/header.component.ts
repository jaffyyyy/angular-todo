import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogoutComponent } from '../icons/logout/logout.component';
import { InputComponent } from '../forms/input/input.component';
import { ButtonComponent } from '../forms/button/button.component';
import { CommonModule } from '@angular/common';
import { BackIconComponent } from '../icons/back-icon/back-icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LogoutComponent,
    InputComponent,
    ButtonComponent,
    BackIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() onClickBackEvent = new EventEmitter();

  @Input() value: string = '';
  @Input() showSearchIcon = false;
  @Input() showClearIcon?: boolean = true;
  @Input() currentAction?: 'ADD' | 'UPDATE' | 'DELETE';

  onBack() {
    this.onClickBackEvent.emit();
  }
}
