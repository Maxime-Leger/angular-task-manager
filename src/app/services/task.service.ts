import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Task } from './../Task';
import { TASKS } from './../mock-tasks';

const httpOptions = {
  'headers': new HttpHeaders({
    'content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = "http://localhost:3000/tasks";

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl); //of(TASKS);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task>(url);
  }
  
  putTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task>(url, task, httpOptions);
  }

  postTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  }
}
