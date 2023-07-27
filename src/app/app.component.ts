import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from './types/todo';

let initialTodos = [
  { id: 1, title: 'HTML + CSS', completed: true},
  { id: 2, title: 'JS', completed: false},
  { id: 3, title: 'React', completed: false},
  { id: 4, title: 'Vue.js', completed: false}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  todos = initialTodos;
  todoForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3),
      ]
    }),
  })


  get title() {
    return this.todoForm.get('title') as FormControl;
  }

  get activeTodos() {
    return this.todos.filter(todo => !todo.completed)
  }

  addTodo() {
    if (this.todoForm.invalid) {
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      title: this.title.value,
      completed: false,
    };

    this.todos.push(newTodo);
    this.todoForm.reset();
  }
}
