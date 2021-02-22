import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Hello There';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetch();
  }

  addTodo() {
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => {
      this.todos = t;
    });
  }
}
