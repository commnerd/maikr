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

  tasks!: Array<Task>;
  tmpTask?: Task

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskService.list().then((tasks: Task[]) => {
      tasks.push({short: ""} as Task);
      this.tasks = tasks;
    });
  }

  drop(event: CdkDragDrop<Array<Task>>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  blurLine(task: Task, value: any) {
    task.short = value;
    if(this.tasks[this.tasks.length - 1].short != "") {
      this.tasks.push({short: ""} as Task);
    }
  }

  keyUp(event: KeyboardEvent) {
    if(event.key === 'Enter'){
      event.target?.dispatchEvent(new Event('blur'))
    }
  }

  doubleClick(event: FocusEvent){
    event.target?.dispatchEvent(new Event('value'))
  }
}
