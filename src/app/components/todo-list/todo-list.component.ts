import { Component } from '@angular/core';
import { Todo, Todos } from '../../types/Todo';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { TaskIconComponent } from '../icons/task-icon/task-icon.component';
import { DottedIconComponent } from '../icons/dotted-icon/dotted-icon.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { PlusIconComponent } from '../icons/plus-icon/plus-icon.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TaskIconComponent,
    DottedIconComponent,
    MatMenuModule,
    MatButtonModule,
    PlusIconComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  searchText: string = '';
  showClearIcon: boolean = false;
  showSearchIcon: boolean = true;
  currentAction?: 'ADD' | 'UPDATE' | 'DELETE';
  isDeleting: boolean = false;
  currentState?: Todo;

  mockTodos: Todos = [
    {
      id: 'id-1',
      title: 'Wake up @7:00 AM',
      isCompleted: true,
      isSelected: true,
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

  onClickBack() {
    this.currentAction = undefined;
  }

  onClickAdd() {
    this.currentAction = 'ADD';
  }

  onDeleteModalClick(id: string) {
    this.currentAction = 'DELETE';
    this.isDeleting = true;
    this.currentState = this.mockTodos.find((todo) => todo.id === id);
  }

  // DELTE?
  onClickYes() {
    this.mockTodos = this.mockTodos.filter(
      (todo) => todo.id !== this.currentState?.id
    );
    this.currentAction = undefined;
    this.isDeleting = false;
  }
  onClickNo() {
    this.currentAction = undefined;
    this.isDeleting = false;
  }
}
