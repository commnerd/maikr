import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, map, mergeMap, tap } from 'rxjs';

import { TaskService } from '@services/task.service';
import { Task } from '@maikr/lib/models/task';

@Component({
  selector: 'app-mvp',
  templateUrl: './mvp.component.html',
  styleUrls: ['./mvp.component.scss']
})
export class MvpComponent implements OnInit {

  tasks$!: Observable<Array<Task>>;
  projectId!: string;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
  ) { }

  ngOnInit(): void {
    this.tasks$ = this.route.params.pipe(
      map(params => params['projectId']),
      tap(projectId => this.projectId = projectId),
      mergeMap(projectId => this.taskService.list({ parent_project: this.projectId }))
    )
  }

  update(tasks: Array<Task>) {
    console.log(tasks);
    tasks.forEach(task => task.parent_project = this.projectId);
    this.taskService.updateBatch(tasks);
  }
}
