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
    // let batchUpdate: Array<Task> = [];
    // let firstIndex = event.previousIndex <= event.currentIndex ? event.previousIndex : event.currentIndex;
    // let lastIndex = event.previousIndex > event.currentIndex ? event.currentIndex : event.previousIndex;
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
    // for(let i = firstIndex; i < lastIndex; i++) {
    //   batchUpdate.push(this.tasks[i]);
    // }
    this.taskService.updateBatch(this.tasks).then(b => console.log(b));
  }

  update(taskIndex: number, value: string) {
    if(value.length > 0) {
      this.tasks[taskIndex].short = value;
      this.taskService.save(this.tasks[taskIndex]).then(task => { this.tasks[taskIndex] = task });
    }
    else {
      this.remove(taskIndex);
    }
    this.appendEmptyTask();
  }

  remove(taskIndex: number) {
    if(this.tasks[taskIndex]._id != undefined) {
      this.taskService.delete(this.tasks[taskIndex]._id).then(() => this.tasks.splice(taskIndex, 1));
    }
    else {
      this.tasks.splice(taskIndex, 1);
    }
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
