import { Component, OnInit } from '@angular/core';

import { TaskService } from '@services/task.service';
import { Task } from '@maikr/lib/models/task';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mvp',
  templateUrl: './mvp.component.html',
  styleUrls: ['./mvp.component.scss']
})
export class MvpComponent implements OnInit {

  projectId!: string; 
  tasks: Array<Task> = [];
  taskShorts: Array<string> = [];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.initProjectIdFromPath();
    this.taskService.list()
  }

  update(taskShorts: Array<string>) {
    let tasks = this.tasks.map((task, index) => {
      task.parent_project = this.projectId;
      task.short = taskShorts[index];
      return task;
    });
    this.taskService.updateBatch(tasks).then(tasks => {
      this.tasks = tasks;
    });
  }

  initProjectIdFromPath() {
    let subscription = this.route.params.subscribe(rs => {
      this.projectId = rs['projectId'];
      setTimeout(() => {
        subscription.unsubscribe();
      }, 0);
    });
  }

  initTasks(projectId: string) {
    this.taskService.list({ parent_project: projectId }).then(tasks => {
      this.tasks = tasks;
      this.taskShorts = this.tasks.map(task => task.short);
    });
  }
}
