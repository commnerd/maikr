import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { TaskService } from '@services/task.service';
import { Task } from '@maikr/lib/models/task';

@Component({
  selector: 'app-mvp',
  templateUrl: './mvp.component.html',
  styleUrls: ['./mvp.component.scss']
})
export class MvpComponent implements OnInit {

  tasks: Array<Task> = [];

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.list().then((tasks: Task[]) => {
      this.tasks = tasks;
      tasks.push({short: ""} as Task);
    });
  }

  drop(event: CdkDragDrop<Array<Task>>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    this.update(event.currentIndex, this.tasks[event.currentIndex].short);
  }

  update(taskIndex: number, value: string) {
    if(value.length > 0) {
      this.tasks[taskIndex].short = value;
    }
    else {
      this.tasks.splice(taskIndex, 1);
    }
    if(taskIndex == this.tasks.length - 1) {
      this.tasks.push({short: ""} as Task);
    }
  }
}
