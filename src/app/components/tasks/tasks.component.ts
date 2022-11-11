import { Component, OnInit } from '@angular/core';
import { Task } from './../../Task'
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  taskDeleteFromTasks(task: Task) {
    this.taskService.deleteTask(task).subscribe((obj) => this.tasks = this.tasks.filter(task2 => task2.id !== task.id));
  }

  taskPutFromTasks(task: Task) {
    this.taskService.putTask(task).subscribe();
  }
}
