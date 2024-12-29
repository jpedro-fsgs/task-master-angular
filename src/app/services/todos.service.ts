import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    { id: 1, title: 'Add a Task', completed: false },
  ];

  constructor() {}

  addTodo(todo: Todo): void {
    this.todoItems.push(todo);
  }

  removeTodo(id: number): void {
    this.todoItems = this.todoItems.filter((todo) => todo.id !== id);
  }

  toggleTodoCompletion(id: number): void {
    const todo = this.todoItems.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
