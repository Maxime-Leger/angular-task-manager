import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import {Subscription } from 'rxjs';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() taskAdd: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((onAddToggle) => (this.showAddTask = onAddToggle));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.text) {
      alert('Enter title plz !');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.taskAdd.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
