import { Component } from '@angular/core';
import { ButtonComponent } from '../forms/button/button.component';
import { Todos } from '../../types/Todo';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent, HeaderComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  searchText: string = '';

  mockTodos: Todos = [
    {
      id: 'id-1',
      title: 'Wake up @7:00 AM',
      isCompleted: true,
    },
    {
      id: 'id-2',
      title: 'Wake up @8:00 AM',
      isCompleted: false,
    },
    {
      id: 'id-3',
      title: 'Wake up @9:00 AM',
      isCompleted: false,
    },
  ];
}
