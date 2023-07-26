import { Component } from '@angular/core';

let initialTodos = [
  { id: 1, title: 'HTML + CSS', completed: true},
  { id: 2, title: 'JS', completed: false},
  { id: 3, title: 'React', completed: false},
  { id: 4, title: 'Vue.js', completed: false}
]

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  editing = false;
  todos = initialTodos;
  title = '';

  get activeTodos() {
    return this.todos.filter(todo => !todo.completed)
  }

  addTodo() {
    if (!this.title) {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      title: this.title,
      completed: false,
    };

    this.todos.push(newTodo);
    this.title = '';
  }
}
