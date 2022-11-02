import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Task } from './../../Task'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Output() taskDelete = new EventEmitter();
  faTimes = faTimes;

  @Input() task: Task = {
    id: -1,
    day: '',
    text: 'ex',
    reminder: false,
  }

  constructor() { }

  ngOnInit(): void {
  }

  taskDeleteFromTask(): void {
    this.taskDelete.emit();
  }
}
