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
    this.appendEmptyTask();
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
    this.appendEmptyTask();
  }

  appendEmptyTask() {
    if(
      this.tasks.length <= 0 ||
      this.tasks[this.tasks.length - 1].short.length > 0
    ) {
      this.tasks.push({short: ""} as Task);
    }
  }
}
