import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: string = 'submit';
  @Input() label: string = '';
  @Input() color?: 'primary' | 'default' = 'default';
  @Output() onClick = new EventEmitter();

  onClickButton() {
    this.onClick.emit();
  }
}
