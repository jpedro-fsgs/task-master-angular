import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, MatIconModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todoService = inject(TodosService);

  todoItems = signal<Array<Todo>>([]);

  todoInput = "";

  ngOnInit(): void {
    this.todoItems.set(this.todoService.todoItems);
  }

  addTodo(): void {
    if(this.todoInput.trim() == '') return;
    const newTodo: Todo = {
      id: Date.now(),
      title: this.todoInput,
      completed: false,
    };
    this.todoService.addTodo(newTodo);
    this.todoItems.set(this.todoService.todoItems);
    this.todoInput = '';
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
    this.todoItems.set(this.todoService.todoItems);
  }

  toggleTodoCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
    this.todoItems.set(this.todoService.todoItems);
  }
}
