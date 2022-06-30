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

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.initProjectIdFromPath();
  }

  update(tasks: Array<Task>) {
    this.tasks = (tasks as unknown as Array<Task>).map((value) => {
      value.parent_project = this.projectId;
      return value;
    }) as Array<Task>;
    this.taskService.updateBatch(this.tasks);
  }

  initProjectIdFromPath() {
    let subscription = this.route.params.subscribe(rs => {
      this.projectId = rs['projectId'];
      subscription.unsubscribe();
    })
  }
}
